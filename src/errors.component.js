import React from "react";
import {connect} from "react-redux";
import {clearErrors} from "./actions"

class Errors extends React.Component {
    render() {
        return (
            <div className="erros-list">
                {
                    this.props.errors.map( (error, i) => <div key={i} className="error" onClick={this.props.clear}>{error}</div> )
                }
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        errors: state.errors
    }
}

function mapDispatchToProps(dispatch){
    return {
        clear: ()=> dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Errors);


