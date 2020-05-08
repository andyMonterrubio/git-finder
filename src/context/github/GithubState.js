import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'
import githubContext from './githubContext'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users

    //Get User 

    //Get repos

    //Clear Users

    //Set loading 


    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos.repos,
            loading: state.loading
        }} >
            {props.children}
        </GithubContext.Provider>
}

export default GithubState;