
var fs = require('fs');

var express = require('express');

var FILE_NAME = "index.html"

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = fs.readFileSync(FILE_NAME);
  response.send(content.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

