var express = require('express');
var path = require('path');
const http = require("http");
const { isBuffer } = require('util');

var app = express();

var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Application')));

app.get('/engineer', function(request, response) {
	response.sendFile(path.join(__dirname + '/indexengineer.html'));
});

app.get('/devops', function(request, response) {
	response.sendFile(path.join(__dirname + '/indexdevops.html'));
});

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/Application/index.html'));
});

server.listen(process.env.PORT || 443); 

