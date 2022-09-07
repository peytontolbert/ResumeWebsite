var express = require('express');
var path = require('path');
const http = require("http");

var app = express();

var server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/engineer', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/indexengineer.html'));
});

app.get('/devops', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/indexdevops.html'));
});

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/home', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/index.html'));
});


server.listen(process.env.PORT || 443); 

