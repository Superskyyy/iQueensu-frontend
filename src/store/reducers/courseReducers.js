import { GET_COURSE_SUCCESS } from "../actions/types";

// this is where states inside this reducer change

const initialState = {
    currentCourse: undefined,
}

const refreshCourse = (state, action)=>{
    return Object.assign({}, state, { currentCourse: action.currentCourse});
}

// how to hook with courseActions?
const courseReducerHandler = (state = initialState, action) =>{
    switch (action.type){
        case GET_COURSE_SUCCESS:
            return refreshCourse(state, action);
        default:
            return state;
    }
}


export default courseReducerHandler;