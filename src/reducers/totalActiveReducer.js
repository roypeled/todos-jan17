import * as Constants from "../actions/constants";

export default function(state = 0, action){

    switch (action.type){
        case Constants.SET_ALL_TODO_COMPLETED:
        case Constants.SET_TODO_COMPLETED:
        case Constants.REMOVE_TODO:
        case Constants.ADD_TODO:
            let appState = action.getState();
            return appState.todos.filter( todo => !todo.isCompleted ).length;
    }

    return state;
}
