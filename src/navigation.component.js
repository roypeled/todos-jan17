import React from "react";
import {connect} from "react-redux";
import {clearCompleted} from "./actions";

class Navigation extends React.Component {

    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{ this.props.totalActive }</strong>
                    <span> </span>
                    <span>items</span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    <li><a className="selected">All</a></li>
                    <span> </span>
                    <li><a className="">Active</a></li>
                    <span> </span>
                    <li><a className="">Completed</a>
                    </li>
                </ul>
                <button onClick={ ()=> this.props.clearCompleted() } className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}

function mapStateToProps(state){
    return {
        totalActive: state.totalActive
    }
}

function mapDispatchToProps(dispatch){
    return {
        clearCompleted: () => dispatch( clearCompleted() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
