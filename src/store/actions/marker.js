import {ADD_MARKER, DEL_MARKER} from "./types";

export function addMarker() {

    return {type: ADD_MARKER}
}

export function delMarker() {
    return {type: DEL_MARKER}
}
