var express = require('express');
var app = express();

app.use('/',express.static(__dirname + '/public'));

app.get(

var port = process.env.PORT || 5000;

app.listen(port);

console.log('Listening on ' + port);
