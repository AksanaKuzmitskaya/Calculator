import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
    render() {
        var value = '';
        if (this.props.result) {
            value = this.props.result.buttonName;
        }
        return (
            <div className="result">
                <input type="text"
                    disabled
                    value={value}
                />
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        result: state.activeButton
    };
}

export default connect(mapStateToProps)(Result);