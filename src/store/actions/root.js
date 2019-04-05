import * as types from './types';

const actions = {
  changeLanguage(val) {
    console.log("Current Language: " + val);
    return (dispatch, state) => {
      dispatch({
        type: types.CHANGE_LANGUAGE,
        val
      });
    };
  }
};

export default actions;

