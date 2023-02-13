
const express = require('express')
const addition = require('./calculator')
const app = express()
var bodyParser = require("body-parser");
const multiplication = require('./calculator')
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/submited', function (req, res) {
    myArray=req.body.array
    res.send(200,()=>multiplication(myArray))
});
app.get('/submited', function (req, res) {
    myArray=req.body.array
    res.send(200,()=>addition(myArray))
});
var server = app.listen(5000, function () {
 console.log('Server running at http://localhost:5000');
});

