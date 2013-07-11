var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());



app.get('/', function(request, response) {

  //Reading content from index.html
  var index_content;
  fs.readFile('index.html','utf8', function(err,index_content) {
    if (err) throw err;
  });

  response.send('hello'+index_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
