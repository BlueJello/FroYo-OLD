
module.exports = function(froYo){
    return function loadControllers(cb){
      froYo.log.silly('Loading controllers');
      var self = this;
      froYo.plugins.loadApi.loadControllers(function controllersLoaded(err, ctrls){
        if (err) return cb(err);

        froYo.controllers = ctrls;

        // _.each(froYo.controllers, function(controller, controllerId){
        //   _.each(controller, function(action, actionId){
        //     actionId = actionId.toLowerCase();

        //     if (action === false){

        //     }

        //     self.
        //   })
        // })
      console.log(froYo.controllers);
      });
      cb(null, froYo);
    }
}

  // return function loadModels(){

  //   console.log('Loading Models');
  //   var apiDir = FroYo.appPath + '/api';
  //   buildDictionary.optional({
  //     dirname: apiDir,
  //     filter: /(.+)Model\.(js|coffee)$/,
  //     replaceExpr: /Model/
  //   }, function(err, dict){
  //       _.each(dict, function(model){

  //         var modelName = Object.keys(model)[0];
  //         console.log(modelName);
  //         FroYo.thinky.createModel(modelName, model[modelName]);
  //       });
  //   });
  // }