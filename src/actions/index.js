import * as Constants from "./constants";

export function addTodo(label){
    return (dispatch) => {
        if(!label)
            return;

        dispatch( { type: Constants.ADD_TODO, label } );
    }
}

export function removeTodo(id){
    return { type: Constants.REMOVE_TODO, id }
}

export function setTodoCompleted(id, isCompleted){
    return { type: Constants.SET_TODO_COMPLETED, id, isCompleted }
}

export function setAllTodoCompleted(isCompleted){
    return { type: Constants.SET_ALL_TODO_COMPLETED, isCompleted }
}

export function updateTodoLabel(id, label){
    return (dispatch) => {
        if(!label)
            return;

        dispatch( { type: Constants.UPDATE_TODO_LABEL, id, label } );
    }
}

export function clearCompleted(){
    return { type: Constants.CLEAR_COMPLETED }
}


export function sendError(msg){
    return { type: Constants.ERROR, msg };
}
