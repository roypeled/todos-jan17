import {combineReducers} from "redux";
import todosReducer from "./todosReducer";
import totalActiveReducer from "./totalActiveReducer";
import errorsReducer from "./errorsReducer";


export default combineReducers({
    todos: todosReducer,
    totalActive: totalActiveReducer,
    errors: errorsReducer
})
