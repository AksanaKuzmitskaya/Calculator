import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickButton } from '../actions/index';
import { bindActionCreators } from 'redux';

class Buttons extends Component {

    renderButtons() {
        return this.props.buttons.map((button) => {
            return (
                <button 
                    onClick={() => this.props.clickButton(button)}
                    key={button.buttonName}>
                    {button.buttonName}
                </button>
            );
        })
    }

    render() {
        return ( 
            <div>
                {this.renderButtons()}
            </div>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clickButton: clickButton }, dispatch);
}

function mapStateToProps(state) {
    return {
        buttons: state.buttons
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);