var express = function(froYo, next){
  froYo.log.silly('Loading express');
  var express = require('express');

  froYo.plugins.http = {};

  froYo.plugins.http.app = express();
  froYo.plugins.http.server = require('http').createServer(froYo.plugins.http.app);

  // Serve static files;
  froYo.plugins.http.app.use(express.static(froYo.appPath + '/public'));

  next();
}

exports.express = express;