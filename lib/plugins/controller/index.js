var controller = function(froYo, next){
  var buildDictionary = require('sails-build-dictionary');
  froYo.controller = {
    controllers: {}
  }
  // froYo.controllers = {};

  froYo.log.silly('Loading controllers');
  buildDictionary.optional({
    dirname: froYo.apiPath,
    filter: /(.+)Controller\.(js|coffee)$/,
    flattenDirectories: true,
    replaceExpr: /Controller/
  }, function(err, data){
    froYo.controller.controllers = data;
  });

  froYo.controller.run = function(controller, action) {
  // body...
  };

  next();
}



exports.controller = controller;