import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const state = {
    todos: [
        {
            label: "Test label",
            isCompleted: false,
            id: 6
        },
        {
            label: "Test label 2",
            isCompleted: true,
            id: 7
        },
        {
            label: "Test label 3",
            isCompleted: false,
            id: 8
        },
    ],
    totalActive: 2,
    errors: []
};

let stateMiddleware = store => next => action => {
    action.getState = store.getState;
    next(action);
};

let logMiddleware = store => next => action => {
    console.log(action);
    next(action);
};

let middlewares  = applyMiddleware(thunk, stateMiddleware, logMiddleware);

export default createStore(reducers, state, composeWithDevTools(middlewares) );
