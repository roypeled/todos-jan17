import * as Constants from "../actions/constants";


export default function todosReducer(state = [], action){

    switch (action.type){
        case Constants.ADD_TODO:
            return [{
                label: action.label,
                isCompleted: false,
                id: state.reduce( (id, todo) => (id > todo.id)? id : todo.id, 0 ) + 1
            }, ...state];

        case Constants.REMOVE_TODO:
            return state.filter( todo => action.id != todo.id );

        case Constants.SET_TODO_COMPLETED:
            return state.reduce( (arr, todo) => {
                if(action.id == todo.id)
                    todo.isCompleted = action.isCompleted;
                arr.push(todo);
                return arr;
            }, [] );

        case Constants.UPDATE_TODO_LABEL:
            return state.reduce( (arr, todo) => {
                if(action.id == todo.id)
                    todo.label = action.label;
                arr.push(todo);
                return arr;
            }, [] );

        case Constants.SET_ALL_TODO_COMPLETED:
            return state.map(todo => {
                todo.isCompleted = action.isCompleted;
                return todo;
            });

        case Constants.CLEAR_COMPLETED:
            return state.filter( todo => !todo.isCompleted )
    }

    return state;
}
