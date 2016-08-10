var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var secret = "myverysuperdupersecretthing";
var User = require('./models/user');


app.listen(3000);
console.log("listening to the smooth sounds of port 3000");