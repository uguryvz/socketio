var app = require('express')();
var express = require("express");
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

io.on('connection', function(socket){
  
  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
});


http.listen(process.env.PORT, function(){
  console.log('listening on *:'+ process.env.PORT);
});
