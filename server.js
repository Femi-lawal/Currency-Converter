//server.js
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
const path = require('path');
var port =3002;

app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/'));

//start server
app.listen(port, function() {
	console.log('app started on 3002');
});
//route to out app
app.get('/', function (req, res) {
  res.render('converter');
});
