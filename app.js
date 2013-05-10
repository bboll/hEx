
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

var rows = [];
var tmpStr;

pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM Person');

  query.on('row', function(row) {
    //console.log(JSON.stringify(row));
    rows.push(row);

  });
  query.on('end', function() {
  });

}); 

    fs.writeFile(file, JSON.stringify(), function (err){
      if(err) {
        console.log(error);}
    console.log(util.inspect(rows)); 
    });

fs.readFile(file, "utf-8", function (err, data) {
  if (err) throw err;
    /*tmpStr = JSON.parse(data);
    console.log(tmpStr);*/
    //console.log(data);

});
