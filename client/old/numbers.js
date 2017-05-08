import React, { Component } from 'react';

class Numbers extends Component {
    render() {
        return (
            <div className="numbers">
                <input 
                type="text" 
                value={this.state.xVal} 
                onChange={e => this.setState({xVal: parseInt(e.target.value, 10)})}/>
                <input
                type="text" 
                value={this.state.yVal}
                onChange={e => this.setState({yVal: parseInt(e.target.value, 10)})}/>
            </div>
        )
    }
}

export default Numbers;