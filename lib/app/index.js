var events = require('events');
var loadPlugins = require('../plugins');
var winston = require('winston');
var util = require('util');



function FroYo() {
  // var froYo = this;
  events.EventEmitter.call(this);
  this.log = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'silly', colorize:'true' })
    ]
  });
  this.appPath = process.cwd();
  this.apiPath = process.cwd() + '/api';
  this.plugins = {};
};

util.inherits(FroYo, events.EventEmitter);
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