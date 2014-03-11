var buildDictionary = require('sails-build-dictionary');


module.exports = function(FroYo){
  return function loadModels(){

    console.log('Loading Models');
    var apiDir = FroYo.appPath + '/api';
    buildDictionary.optional({
      dirname: apiDir,
      filter: /(.+)Model\.(js|coffee)$/,
      replaceExpr: /Model/
    }, function(err, dict){
        _.each(dict, function(model){

          var modelName = Object.keys(model)[0];
          console.log(modelName);
          FroYo.thinky.createModel(modelName, model[modelName]);
        });
    });
  }
}