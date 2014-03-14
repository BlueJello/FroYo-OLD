var config = function(froYo, next){
  froYo.log.silly('Loading config');
  froYo.config = {
    appPort: 1337
  };

  next();
}

exports.config = config;