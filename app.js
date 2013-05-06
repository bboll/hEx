
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://nytxdtfjjmtrww:JCV_IErkPLD8bzM1IvyzsYWFiA@ec2-54-235-155-40.compute-1.amazonaws.com:5432/d5k9e23rueegif"

var client = new pg.Client(conString);
app.get('/', function (req, res) {
  pg.connect(conString, function (err, client, done) {
    if(!err) return false;
    done(client);
    return true;
  });
})

/*
var query = client.query("SELECT name FROM Person");
query.on("row", function (row, result) {
    result.addRow(row);
});
query.on("end", function (result) {
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});*/

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
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/* Connecting to PostgreSQL DB from Node and reading into JSON file */
