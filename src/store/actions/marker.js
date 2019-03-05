import {ADD_MARKER, DEL_MARKER} from "./types";

const actions = {
    addMarker(val) {
        console.log(val);
        return (dispatch, state) => {
            dispatch({
                type: ADD_MARKER,
                val
            });
        };
    },
    delMarker(val) {
        console.log(val);
        return (dispatch, state) => {
            dispatch({
                type: DEL_MARKER,
                val
            });
        };
    }
};

export default actions;
