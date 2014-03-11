// Setup basic express server

GLOBAL._ = require('lodash');
var FroYo = {};
FroYo.appPath = __dirname;
var express = require('express');
var app = FroYo.app = express();
var server = require('http').createServer(app);
var io = FroYo.io = require('socket.io')(server);
var handleConnection = require('./lib/sockets.js')(FroYo.io);

var port = process.env.PORT || 4000;
var thinky = FroYo.thinky = require('./thinky').thinky;
var load = require('./lib/load')(FroYo);


load();

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(FroYo.appPath + '/public'));


io.on('connection', handleConnection);

FroYo.thinky.models['Teacher'].run(function(err, teachers){
  console.log(teachers);
});