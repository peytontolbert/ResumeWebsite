var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var session = require('express-session');
var logger = require('morgan');
const http = require("http");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { isBuffer } = require('util');

var app = express();
var uploadstorage = multer.diskStorage({ 
                            destination: './uploads/',
                            filename: function(req, file, callback) { 
                                callback(null, file.originalname)
                            } 
                            });


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
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/engineer', function(request, response) {
	response.sendFile(path.join(__dirname + '/Application/indexengineer.html'));
});

app.get('/devops', function(request, response) {
	response.sendFile(path.join(__dirname + '/Application/indexdevops.html'));
});

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/Application/index.html'));
});


app.use('/index', indexRouter);
app.use('/users', usersRouter);

server.listen(process.env.PORT || 443); 

