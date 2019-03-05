import {CHANGE_LANGUAGE} from "./types";

const actions = {
  changeLanguage(val) {
    console.log(val);
    return (dispatch, state) => {
      dispatch({
        type: CHANGE_LANGUAGE,
        val
      });
    };
  }
};

export default actions;

