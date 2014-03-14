var controllers = function(froYo, next){
  var buildDictionary = require('sails-build-dictionary');

  froYo.controllers = {};

  froYo.log.silly('Loading controllers');
  buildDictionary.optional({
    dirname: froYo.apiPath,
    filter: /(.+)Controller\.(js|coffee)$/,
    flattenDirectories: true,
    replaceExpr: /Controller/
  }, function(err, data){
    froYo.controllers = data;
  });

  next();
}

exports.controllers = controllers;