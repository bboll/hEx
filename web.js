var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {

var port = process.env.PORT || 5000;

    console.log('request starting...');
    
    fs.readFile('./index.html', function(error, content) {
        if (error) {
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });
    
}).listen(port);
console.log('Listening on ' + port);

