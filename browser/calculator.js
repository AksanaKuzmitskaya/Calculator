/*
If this was an app, this would be a monolithic implementation
Challenges:
    1. Dificult to extend
    1. More than one reason to change
*/

// Web Service 

import express from 'express';
const app = express()
//http://localhost
app.post('/api/add', function(req, res) {
    const x = req.body.x;
    const y = req.body.y;
    const result = x + y;
    res.send(result);
});
app.listen(9090)

//--------------------------------------------
import request from 'axios';
class CalculatorUsingWebServices {
    constructor() {
       console.log('Calculator started');
    }
    multiply(x, y) { 
        return request.post('/api/mul', x, y);
    };
    devide(x, y) {
        return request.post('/api/div', x, y);
    }
    add(x, y) {
        return request.post('/api/add', x, y);
    }
    subtract(x, y) {
        return request.post('/api/sub', x, y);
    }
}
 

class Calculator {
    constructor() {
       console.log('Calculator started');
    }
    multiply(x, y) {
	return x*y;	
    };
    devide(x, y) {
	if ( y == 0 ) {
	    console.log('Deviding by 0 is not allowed');
	    return;
	}
        return x/y;
    }
    add(x, y) {
	return x+y;
    }
    subtract(x, y) {
        return x-y;
    }
}


var calculator = new Calculator;
console.log(calculator.add(3,5));
console.log(calculator.subtract(5,7));

var calWithSerivce = new CalculatorUsingWebServices();
console.log(calWithSerivce.add(5,7));
