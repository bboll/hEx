
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , pg = require('pg').native
  , conString = process.env.DATABASE_URL || 'postgres://nytxdtfjjmtrww:JCV_IErkPLD8bzM1IvyzsYWFiA@ec2-54-235-155-40.compute-1.amazonaws.com:5432/d5k9e23rueegif'
  , client;


//client = new pg.Client(conString);
//client.connect();
/*WORK DAMNIT
app.get('/', function (req, res) {
  query = client.query('SELECT * FROM Person');
  query.on('row', function(result) {
    console.log(result);

    if (!result) {
      return res.send('No data found'); }
    else {
      res.send('Query complete');
    }
  });

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
