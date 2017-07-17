import {CLEAR_ERRORS, ERROR} from "../actions/constants"

export default function errorReducer(state = [], action) {
    switch (action.type){
        case ERROR:
            return [action.msg, ...state];
        case CLEAR_ERRORS:
            return [];
    }

    return state;
}
