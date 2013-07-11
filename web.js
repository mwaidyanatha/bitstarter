var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

//Reading content from index.html
var index_content;
fs.readFile('index.html','utf8', function(err,index_content) {
  if (err) throw err;
  console.log(index_content);
});


app.get('/', function(request, response) {
  response.send(index_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
