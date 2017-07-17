import React from "react";
import {connect} from "react-redux";
import Todo from "./todo.component";

class TodoList extends React.Component {
    render(){

        let filter = this.props.match.params.filter,
            todos;

        if(filter == "all")
            todos = this.props.todos;
        else if(filter == "active")
            todos = this.props.todos.filter( todo => !todo.isCompleted );
        else if(filter == "completed")
            todos = this.props.todos.filter( todo => todo.isCompleted );

        return (
            <ul className="todo-list">
                { todos.map(model => <li key={model.id}><Todo {...model}/></li>) }
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(TodoList);
