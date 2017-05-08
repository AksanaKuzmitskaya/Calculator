import React, { Component } from 'react'; 
import Result from './result'
import Numbers from '../components/numbers';
import Buttons from '../components/buttons';

class CalculatorContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      xVal: '',
      yVal: '',
      result: ''
    };
  }

  render() {
    return (
        <div className="container">
          <Result result={this.state.result} />
          <Numbers data={this.state} onUpdate={this.onUpdate.bind(this)} />
          <hr/>
          <Buttons />
        </div>
    );
  }
  onUpdate (data) { this.setState({ data }) }
}

export default CalculatorContainer;
