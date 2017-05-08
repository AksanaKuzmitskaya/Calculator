const fetch = require("fetch");
const express = require("express");
const app = express();


app.use(express.static('public'));

var data = {
    "x" : 1,
    "y" : 2
};

var d = new FormData();
d.append("json", JSON.stringify(data));

fetch('api/add', 
{
    method: "POST",
    body: d

})
.then(function(res){ return res.json(); })

app.listen(3030);
