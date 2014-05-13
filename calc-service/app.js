// JavaScript Document
//create a server listening on port 5000 in the app.js file

// Create one web route called "add" that is a "get" that when executed it should simply console.log to the screen "adding." (console.log("adding);)
var express = require('express');
var app = express();


/*With the new application instance you can start defining routes via app.VERB(),
in this case "GET /" responding with the "Hello World" string. 
 
The req and res are the exact same objects that node provides to you, thus you may invoke res.pipe(), req.on('data', callback) and anything else you would do without Express involved.

Express augments these objects providing you with higher level methods such as res.send(), which among other things adds the Content-Length for you:
*/
app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});


/*Now to bind and listen for connections invoke the app.listen() method, accepting the same arguments as node's net.Server#listen():*/
var server = app.listen(5000, function() {
    console.log('Listening on port %d', server.address().port);
});


