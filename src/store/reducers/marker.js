import {ADD_MARKER, DEL_MARKER} from "../actions/types"

export default function marker(state = 0, action) {
    switch (action.type) {
        case ADD_MARKER:
            return state + 1;
        case DEL_MARKER:
            return state - 1;
        default:
            return -1;
    }
}
