'use strict'
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var path = require("path");

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, process.env.IP || '0.0.0.0', function(){
	console.log("youre running on " + port);
});