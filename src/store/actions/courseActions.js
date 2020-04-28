//
import {getCourseAPI}                                          from "../../utilities/mockData/getCourseAPI";
import {GET_COURSE_SUCCESS, ADD_TIME_BLOCK, REMOVE_TIME_BLOCK} from "./types";
import {fetchCoursePageData}                                   from "../../utilities/SearchActions/fetchCoursePageData";

// action creators
export const getCourseSuccess = (course) => {
    return {
        type: GET_COURSE_SUCCESS,
        currentCourse: course
    };
};

export const successHandler = (res) => {
    // TODO: add an intermediate interface
    res.json().then(result => {
        return({
            courseDetails: result
        });
    });
};

export const getCourse = (uuid) => {
    return dispatch => {
        let res = fetchCoursePageData(uuid,successHandler());
        dispatch(getCourseSuccess(res));
    };
};

export const addTimeBlock = (timeBlock) => {
    // check 

    return {
        type: ADD_TIME_BLOCK,
        currentTimeBlock: timeBlock
    };
};

export const removeTimeBlock = (timeBlock) => {
    return {
        type: REMOVE_TIME_BLOCK,
        selectedTimeBlock: timeBlock
    }
}

