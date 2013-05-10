
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , pg = require('pg')
  , fs = require('fs');

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

var outputFilename = './person.json';

var rows = [];
var myData = {
  name: 'test',
  version:'1.0'
}

pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM Person');

  query.on('row', function(row) {
    //console.log(JSON.stringify(row));
    rows.push(row);

  });
  query.on('end', function(result) {
    console.log(result.rowCount + ' rows were received');
  });

}); 

//fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function (err){
fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function (err){
  if(err) {
    console.log(error);}
  else {
    console.log("JSON saved to person.json");
  }
});

fs.readFile('person.json', String, function(err, data) {
  if (err) throw err;
    console.log(data);

});
