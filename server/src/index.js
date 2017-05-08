const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const addRouter = require("./routes/add");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//http://loclahost/api/calculator/add
app.use('/api/calculator', addRouter);

app.listen(3000);