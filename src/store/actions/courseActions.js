//
import {getCourseAPI}       from "../../utilities/mockData/getCourseAPI";
import {GET_COURSE_SUCCESS} from "./types";

// action creators
export const getCourseSuccess = (course) => {
  return {
    type: GET_COURSE_SUCCESS,
    currentCourse: course
  };
};

export const getCourse = (possibleFilters) => {
  return dispatch => {
    let res = getCourseAPI();
    dispatch(getCourseSuccess(res));
  };
};
