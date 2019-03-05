const initialState = {
    markers:[]
};
const getMarkerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MARKER":
            return state + 1;
        case "DEL_MARKER":
            return state - 1;
        default:
            return state
    }
};

export default getMarkerReducer;
