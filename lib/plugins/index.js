module.exports = function(froYo) {
  return function loadPlugins(cb){
    froYo.plugins = {};

    var async = require('async');
    var orderedPlugins = {};

    [
      'logger',
      'globals',
      'config',
      'express',
      'sockets',
      'controllers'
    ].forEach(function(plugin){
      var file = __dirname + '/' + plugin;

      froYo.plugins[plugin] = require(file)[plugin];

      orderedPlugins[plugin] = function(next){
        // froYo.log.silly('Loading', plugin);
        froYo.plugins[plugin](froYo, next);
        // froYo.log.silly('Loaded', plugin);
      }
    });

    orderedPlugins['_complete'] = function(){
      froYo.initialized = true;

      cb(null, froYo);
    };

    async.series(orderedPlugins);
  }
}