import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickButton } from '../actions/index';
import { bindActionCreators } from 'redux';

class Numbers extends Component {
    render() {
        return ( 
            <div className="numbers">
                <input 
                    type="text" 
                    value={this.props.numbers.xVal} 
                    onChange={e => this.setState({xVal: parseInt(e.target.value, 10)})}
                />
                <input
                    type="text" 
                    value={this.props.numbers.yVal}
                    onChange={e => this.setState({yVal: parseInt(e.target.value, 10)})}
                />
            </div>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clickButton: clickButton }, dispatch);
}

function mapStateToProps(state) {
    return {
        numbers: state.numbers
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);