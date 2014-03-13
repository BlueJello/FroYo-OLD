var events = require('events');
var loadPlugins = require('../plugins');
var winston = require('winston');

function FroYo() {
  var froYo = this;
  events.EventEmitter.call(froYo);
  froYo.log = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'silly', colorize:'true' })
    ]
  });
  froYo.appPath = process.cwd();
  froYo.apiPath = process.cwd() + '/api';
  froYo.plugins = {};
};
FroYo.prototype.load = function(cb){
  var froYo = this;

  froYo.log.silly('App Loading');

  loadPlugins(froYo)(function(a){
    cb(null, a);
  });

};

FroYo.prototype.launch = function(cb) {
  var froYo = this;
  froYo.log.silly('App launching');

  this.start = function(){
    froYo.log.silly('Starting http server.');
    froYo.plugins.http.server.listen(froYo.config.appPort, function(){
      froYo.log.silly('Http server started!');
      froYo.log.info('App listening on port:', froYo.config.appPort);
    });
  };

  this.load(function(a){
    return froYo.start();
  });

};

module.exports = new FroYo();





// server.listen(port, function () {
//   console.log('Server listening at port %d', port);
// });



// io.on('connection', handleConnection);

// FroYo.thinky.models['Teacher'].run(function(err, teachers){
//   console.log(teachers);
// });


// // Setup basic express server


// var FroYo = {};
// FroYo.appPath = __dirname;
// var express = require('express');
// var app = FroYo.app = express();
// var server = require('http').createServer(app);
// var io = FroYo.io = require('socket.io')(server);
// var handleConnection = require('./lib/sockets.js')(FroYo.io);

// var port = process.env.PORT || 4000;
// var thinky = FroYo.thinky = require('./thinky').thinky;
// var load = require('./lib/load')(FroYo);


// load();

// server.listen(port, function () {
//   console.log('Server listening at port %d', port);
// });

// // Routing
// app.use(express.static(FroYo.appPath + '/public'));


// io.on('connection', handleConnection);

// FroYo.thinky.models['Teacher'].run(function(err, teachers){
//   console.log(teachers);
// });