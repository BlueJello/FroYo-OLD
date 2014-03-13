var express = function(froYo, next){
    froYo.log.silly('Loading express');
    var express = require('express');

    froYo.plugins.http = {};

    var app = froYo.plugins.http.app = express();
    var server = froYo.plugins.http.server = require('http').createServer(froYo.plugins.http.app);

    // Serve static files;
    froYo.plugins.http.app.use(express.static(froYo.appPath + '/public'));

  next();
}

exports.express = express;