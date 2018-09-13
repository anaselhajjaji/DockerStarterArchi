var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Variables
var PGUSER = 'anas'
var PGUSERPWD = 'anaspwd'
var PGDATABASE = 'usersdb'
var PGHOST = '172.18.0.2' // get the ip address from docker

var config = {
  host: PGHOST,
  user: PGUSER, // name of the user account
  password: PGUSERPWD,
  database: PGDATABASE, // name of the database
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}

var pool = new pg.Pool(config)
var myClient

app.post('/api/insert', function(req, res) {
  var username = req.body.uname;
  
  pool.connect(function (err, client, done) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      res.send('Error: ' + err.stack);
    }
    else {
      myClient = client
      var theQuery = 'INSERT into users (uname) VALUES (\'' + username + '\')'
      myClient.query(theQuery, function (err, result) {
        if (err) {
          console.error('Error: ' + err.stack);
          res.send('Error: ' + err.stack);
        }
      })
    }
  })

  res.send(username);
});

app.get('/api/list', function (req, res) {
   
  pool.connect(function (err, client, done) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      res.send('Error: ' + err.stack);
    }
    else {
      myClient = client
      var theQuery = 'SELECT * from users'
      myClient.query(theQuery, function (err, result) {
        if (err) {
          console.error('Error: ' + err.stack);
          res.send('Error: ' + err.stack);
        }
        else {
          res.end(JSON.stringify(result.rows));
        }
      })
    }
  })
})

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})