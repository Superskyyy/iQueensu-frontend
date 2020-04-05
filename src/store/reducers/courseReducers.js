//
import { GET_COURSE_SUCCESS, ADD_TIME_BLOCK, REMOVE_TIME_BLOCK } from "../actions/types";

// this is where states inside this reducer change

const initialState = {
    currentCourse: [],
    registeredTimeTable: [],
};

const refreshCourse = (state, action) => {
    // add sth here to compare?

    return updateObj(state, { currentCourse: action.currentCourse });
};

const refreshTimeBlocks = (state, action) => {
    // update array not obj
    return { ...state, registeredTimeTable: [...state.registeredTimeTable, action.currentTimeBlock] };
};

const removeTimeBlock = (state, action) => {
    let copyList = [];
    // TODO: but this is the pop up of the last item
    // create a helper function to remove the particular item in list
    // i.e remove(action.selectedTimeBlock)
    copyList = state.registeredTimeTable.slice();
    // //Removes last element of the array.
    copyList.pop();
    //Then return the state, with the list property assigned to a new array.
    return { ...state, registeredTimeTable: copyList };
};

// how to hook with courseActions?
const courseReducerHandler = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSE_SUCCESS:
            return refreshCourse(state, action);
        case ADD_TIME_BLOCK:
            return refreshTimeBlocks(state, action);
        case REMOVE_TIME_BLOCK:
            return removeTimeBlock(state, action);
        default:
            return state;
    }
};

const updateObj = (old, updatedProperties) => {
    return {
        ...old,
        ...updatedProperties,
    };
};

export default courseReducerHandler;
