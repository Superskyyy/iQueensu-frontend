import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "./types";

// action creators
export const loginRequest = (username) => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        username
    };
};

export const loginSuccess = (username) =>{
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        username
    }
}

export const loginFailure = () =>{
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
    }
}