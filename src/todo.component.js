import React from "react";
import * as Action from "./actions";
import {connect} from "react-redux";

class Todo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: false,
            label: props.label
        }
    }

    setEdit(isEditing){
        this.setState({isEditing});
    }

    setLabel(label){
        this.setState({label});
    }

    saveLabel(){
        this.setEdit(false);
        this.props.saveLabel(this.props.id, this.state.label);
    }

    setCompleted(isCompleted){
        this.props.setCompleted(this.props.id, isCompleted);
    }

    remove(){
        this.props.remove(this.props.id);
    }

    renderLabel(){
        if(this.state.isEditing)
            return <input type="text"
                          className="edit-label"
                          value={ this.state.label }
                          onChange={ (e) => this.setLabel(e.target.value) }
                          onBlur={ () => this.saveLabel() } />;
        else
            return (<label onDoubleClick={ ()=> this.setEdit(true) }>
                        { this.props.label }
                    </label>);
    }

    render(){
        return (
            <div>
                <input type="checkbox"
                       className="toggle"
                       checked={ this.props.isCompleted }
                       onChange={ (e) => this.setCompleted(e.target.checked) }/>
                { this.renderLabel() }
                <button className="destroy" onClick={ ()=> this.remove() }></button>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return {
        remove: (id) => dispatch( Action.removeTodo(id) ),
        setCompleted: (id, isCompleted) => dispatch( Action.setTodoCompleted(id, isCompleted) ),
        saveLabel: (id, label) => dispatch( Action.updateTodoLabel(id, label) )
    }
}

export default connect(null, mapDispatchToProps)(Todo);
