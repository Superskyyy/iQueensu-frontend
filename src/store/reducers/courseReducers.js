//
import {GET_COURSE_SUCCESS} from "../actions/types";

// this is where states inside this reducer change

const initialState = {
    currentCourse: [],
};

const refreshCourse = (state, action) => {
    // add sth here to compare?

    return updateObj(state, {currentCourse: action.currentCourse});
};

// how to hook with courseActions?
const courseReducerHandler = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSE_SUCCESS:
            return refreshCourse(state, action);
        default:
            return state;
    }
};


const updateObj = (old, updatedProperties) => {
    return {
        ...old,
        ...updatedProperties
    };
};

export default courseReducerHandler;
