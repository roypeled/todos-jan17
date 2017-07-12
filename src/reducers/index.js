import {combineReducers} from "redux";
import todosReducer from "./todosReducer";
import totalActiveReducer from "./totalActiveReducer";


export default combineReducers({
    todos: todosReducer,
    totalActive: totalActiveReducer
})
