var express = require('express');

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  
  var buf = new buffer();
  var fs = require('fs');
    response.send(buf.toString('utc 8', fs.readFileSync("index.html")));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
