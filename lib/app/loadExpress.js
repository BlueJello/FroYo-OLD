
module.exports = function(froYo){

    return function loadExpress(cb){
      froYo.log.silly('Loading express');
      var express = require('express');
      froYo.plugins.http = {};

      var app = froYo.plugins.http.app = express();
      var server = froYo.plugins.http.server = require('http').createServer(froYo.plugins.http.app);
      // froYo.config = {'something': 'a'}

      // Serve static files;
      froYo.plugins.http.app.use(express.static(froYo.config.appPath + '/public'));

      cb(null, froYo);
    }
}
