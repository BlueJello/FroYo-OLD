var globals = function(froYo, next){
  var _ = require( 'lodash' );
  var async = require('async');

  froYo.log.silly('Exposing globals');
  global['_'] = _;
  global['async'] = async;
  global['froYo'] = froYo;

  next();
}

exports.globals = globals;