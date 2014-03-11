module.exports = function(froYo){

    return function loadConfig(cb){
      froYo.log.silly('Loading config');
      froYo.config = {
        appPath: process.cwd(),
        appPort: 1337,
        apiPath: process.cwd() + '/api'

      };

      cb(null, froYo);
    }
}