var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());



app.get('/', function(request, response) {

  //Reading content from index.html
  var index_content;
  data = fs.readFile('index.html','utf8', function(err,index_content) {
    if (err) throw err;
    return index_content;
  });

  response.send('hello'+data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
