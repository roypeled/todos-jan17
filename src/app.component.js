import React from "react";
import TodoList from "./todoList.component";
import AddTodo from "./addTodo.component";
import Navigation from "./navigation.component";


export default class App extends React.Component {
    render(){
        return (
            <div className="todoapp">
                <AddTodo/>
                <TodoList/>
                <Navigation/>
            </div>)
    }
}
