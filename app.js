
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
  , util = require('util');

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

var file = './person.json';

var tmpStr = '';
var tmpStr2 = '';
var rows = [];

pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM Person');

  query.on('row', function(row) {
    //console.log(JSON.stringify(row));
    rows.push(row);

  });
  query.on('end', function() {
    tmpStr = JSON.stringify(rows);
    //console.log(util.inspect(tmpStr));
    fs.writeFileSync(file, tmpStr);
    console.log(tmpStr);
  });
});

tmpStr2 = fs.readFileSync(file, "utf8");
//console.log(util.inspect(tmpStr));
console.log(tmpStr2);


