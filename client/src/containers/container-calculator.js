import React, { Component } from 'react'; 
import Buttons from './buttons';
import Result from './result';
import Numbers from './numbers';

class CalculatorContainer extends Component {

  render() {
    return (
        <div className="container">
          <Result />
          <Numbers />
          <hr/>
          <Buttons />
        </div>
    );
  }
}

export default CalculatorContainer;
