import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    SET_NOUSERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    CLEAR_NOUSERS
} from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        noUsers: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUsers = async user => {
        setLoading();
    
        const res =  await axios.get(`https://api.github.com/search/users?q=${user}`);
        
        if(res.data.total_count === 0){
            setNoUsers();
        }
        
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    //Get User 
    const getUser = async username => {
        setLoading();
    
        const res =  await axios.get(`https://api.github.com/users/${username}?client_id=${
            githubClientId}&client_secret=${githubClientSecret}`);
        
        dispatch({
            type: SET_NOUSERS
        })

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    //Get repos
    const getUserRepos = async username => {
        setLoading();
    
        const res =  await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc
        &client_id=${githubClientId}
        &client_secret=${githubClientSecret}`);
    
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    //Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    //Set loading 
    const setLoading = () => dispatch({ type: SET_LOADING })

    //Set No users 
    const setNoUsers = () => dispatch({ type: SET_NOUSERS })

    //Set No users to false 
    const hideNoUsers = () => dispatch({ type: CLEAR_NOUSERS })
    
    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading, 
            noUsers: state.noUsers,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos,
            setNoUsers,
            hideNoUsers
        }} >
            {props.children}
        </GithubContext.Provider>
}

export default GithubState;