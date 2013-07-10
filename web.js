var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var BUFFER_LENGHT = 64 * 1024;
var buffer = new Buffer(BUFFER_LENGTH);
var src = 'index.html';
var pos = 0;

bytesRead = fs.readSync(src, buffer, 0, BUFFER_LENGHT, pos);

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
