import React from "react";
import {connect} from "react-redux";
import Todo from "./todo.component";
import CSSTransitionGroup from "react-addons-css-transition-group";

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
                <CSSTransitionGroup
                    transitionName="todo"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    { todos.map(model => <li key={model.id}><Todo {...model}/></li>) }
                </CSSTransitionGroup>
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
