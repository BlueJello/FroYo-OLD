var logger = function(froYo, next){
  var winston = require('winston');

  froYo.log = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'silly', colorize:'true' })
    ]
  });
  next();
}

exports.logger = logger;