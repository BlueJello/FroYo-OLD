var services = function(froYo, next){
    var buildDictionary = require('sails-build-dictionary');

    froYo.services = {};

    froYo.log.silly('Loading services');
    buildDictionary.optional({
      dirname: froYo.apiPath,
      filter: /(.+)Service\.(js|coffee)$/,
      flattenDirectories: true,
      replaceExpr: /Service/
    }, function(err, data){
      froYo.services = data;
    });

  next();
}

exports.services = services;