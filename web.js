var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var BUFFER_LENGTH = 64 * 1024;
var buffer = new Buffer(BUFFER_LENGTH);
var src = 'index.html';
var pos = 0;

fileOpen = fs.openSync(src,'r');
bytesRead = fs.readSync(fileOpen, buffer, 0, BUFFER_LENGTH, pos);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
