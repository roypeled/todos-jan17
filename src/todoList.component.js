import React from "react";
import {connect} from "react-redux";
import Todo from "./todo.component";

class TodoList extends React.Component {
    render(){
        return (
            <ul className="todo-list">
                { this.props.todos.map(model => <li key={model.id}><Todo {...model}/></li>) }
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
