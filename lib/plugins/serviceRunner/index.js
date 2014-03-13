var domain = require('domain');
var serviceRunner = function(froYo, next){
    froYo.serviceRunner = {};

    froYo.log.silly('Loading serviceRunner');


  next();
}

exports.serviceRunner = serviceRunner;