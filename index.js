var express = require('express');
var app = express();

app.get('/', function (req, res) {
    // res.send('Hello world');
    res.json({ hello: 'Hello world' });
});

var server = app.listen(3000, function () {
    console.log('server runs in http://127.0.0.1:3000/');
});