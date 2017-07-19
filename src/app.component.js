import React from "react";
import TodoList from "./todoList.component";
import AddTodo from "./addTodo.component";
import Navigation from "./navigation.component";
import {Route} from "react-router";
import Errors from "./errors.component";
import CSSTransitionGroup from "react-addons-css-transition-group";


export default class App extends React.Component {
    render(){
        return (
            <CSSTransitionGroup
                transitionName="todoapp"
                transitionEnter={false}
                transitionLeave={false}
                transitionAppear={true}
                transitionAppearTimeout={500}>
                <div className="todoapp">
                    <AddTodo/>
                    <Route path="/:filter" component={TodoList}/>
                    <Navigation/>
                    <Errors/>
                </div>
            </CSSTransitionGroup>)
    }
}
