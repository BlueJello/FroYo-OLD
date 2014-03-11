module.exports = function(froYo){
  var _     = require( 'lodash' ),
    async   = require('async');

    return function exposeGLobals(){
      froYo.log.silly('Exposing globals');
      global['_'] = _;
      global['async'] = async;
      global['froYo'] = froYo;
    }
}