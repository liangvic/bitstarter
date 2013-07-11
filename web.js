var express = require('express');

var app = express.createServer(express.logger());
var buf = new Buffer(200);
var fs = require('fs');
var text = buf.toString(fs.readFileSync('index.html')); 
app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
