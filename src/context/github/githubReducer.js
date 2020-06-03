import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_NOUSERS,
    CLEAR_NOUSERS
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS: 
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case GET_USER:
            return {
                ...state, 
                user: action.payload,
                loading: false
            };
        case CLEAR_USERS: 
            return {
                ...state, 
                noUsers: false,
                users: [],
                loading: false
            };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state, 
                noUsers: false,
                loading: true
            };
        case SET_NOUSERS:
            return {
                ...state, 
                noUsers: true
            };
        case CLEAR_NOUSERS:
            return {
                ...state, 
                noUsers: false
            };
        default: 
            return state;
    }
}