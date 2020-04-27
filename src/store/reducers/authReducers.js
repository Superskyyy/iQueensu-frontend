// this is where states inside this reducer change

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types";

const initialState = {
    isFetching: false,
    // there should a check to see if user login or not.
    isAuthenticated: false,
    username: '',
    expireTimeStamp: null,
    token: null
};

const updateAuthStates = (state, action) =>{
    return updateObj(state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        username: action.username ? action.username : ''
    })
}

const authReducerHandler  = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return updateAuthStates(state, action);
        case LOGIN_SUCCESS: 
            return updateAuthStates(state, action);
        case LOGIN_FAILURE:
            return updateAuthStates(state,action);
        default:
            return state;
    }
}


const updateObj = (old, updatedProperties) => {
    return {
        ...old,
        ...updatedProperties
    };
};

export default authReducerHandler;