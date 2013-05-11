
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , pg = require('pg')
  , fs = require('fs')
  , util = require('util')
  , url = require('url');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//app.get('/', routes.index);
app.get('/users', user.list);
app.get('/', function(req, res){
    //res.render('layout.jade', {title: 'hEx'});
    //res.contentType('text/HTML');
    console.log('Handling GET request');
});

var file = '/person.json';
var rows = [];
var tmpStr;

function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

  route(pathname);
  
  response.end();
}

function route(pathname) {
  console.log("About to route a request for " + pathname);
}

http.createServer(onRequest).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/*
pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM Person');

  query.on('row', function(row) {
    rows.push(row);
  });
  query.on('end', function() {
    tmpStr = JSON.stringify(rows);
    //fs.writeFileSync(file, tmpStr, "utf8");
  });
});
    console.log(tmpStr);
    console.log(util.inspect(tmpStr));*/
