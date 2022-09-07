var express = require('express');
var path = require('path');
const http = require("http");
const { isBuffer } = require('util');

var app = express();

var server = http.createServer(app);

app.use(express.static('public'));

app.get('/engineer', function(request, response) {
	response.sendFile((__dirname + '/public/indexengineer.html'));
});

app.get('/devops', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/indexdevops.html'));
});

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/index.html'));
});

server.listen(process.env.PORT || 443); 

