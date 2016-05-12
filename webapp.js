'use strict';
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var path = require("path");

app.
use(express.static(path.join(__dirname, 'src')))
.set('view engine', 'jsx')
.engine('jsx', require('express-react-views')
.createEngine());


app.listen(port, process.env.IP || '0.0.0.0', function() {
    console.log("youre running on " + port);
});
