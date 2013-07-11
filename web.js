var express = require('express');

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  
  var buf = new Buffer();
  var fs = require('fs');
    var text = buf.toString('utf8', fs.readFileSync("index.html")); 
    response.send(text);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
