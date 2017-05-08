import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickButton } from '../actions/index';
import { bindActionCreators } from 'redux';

class Result extends Component {
    render() {
        return (
            <div className="result">
                <input type="text"
                disabled
                value={this.props.result}/>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        result: state.result
    };
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clickButton: clickButton }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);