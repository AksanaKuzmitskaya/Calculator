const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    var html = '<form action="/api/add" method="post">' +
                    'Enter first number: ' +
                    '<input type="number" name="firstNumber">' +
                    '<br>' +
                    'Enter second number: ' +
                    '<input type="number" name="secondNumber">' +
                    '<br>' +
                    '<input type="submit" value="Submit">' +
                '</form';
    res.send(html);
})

app.post('api/mul', (req, res) => {
    var x = parseInt(req.body.firstNumber);
    var y = parseInt(req.body.secondNumber);
    var result = x * y;
    var html = 'Multiplying ' + x + ' and ' +
                y + ' , getting: ' + result +
                '.';
    res.send(html);
});

app.post('/api/add', (req, res) => {
    var x = parseInt(req.body.firstNumber);
    var y = parseInt(req.body.secondNumber);
    var result = x + y;
    var html = 'Adding ' + x + ' and ' +
                y + ' , getting: ' + result +
                '.';
    res.send(html);
});

app.listen(3000);
