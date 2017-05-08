import React, { Component } from 'react'; 
import '../../public/style.css';
import CalculatorContainer from '../containers/container-calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"> 
          <h2>Calculator</h2>
        </div> 
        <CalculatorContainer />
      </div>
    );
  }
}

export default App;
