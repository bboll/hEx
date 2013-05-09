var pg = require('pg').native;

var dbURL = "postgres://nytxdtfjjmtrww:JCV_IErkPLD8bzM1IvyzsYWFiA@ec2-54-235-155-40.compute-1.amazonaws.com:5432/d5k9e23rueegif";


function testTable() {
    pg.connect(dbURL, function(err, client) {
        query = client.query('SELECT * FROM Person');
        query.on('row', function(result) {
            console.log(result);

            if (!result) {
              return res.send('No data found'); }
            else {
              res.send('Query complete');
            }
    });
}

