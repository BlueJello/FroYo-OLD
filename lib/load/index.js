module.exports = function(FroYo){

  var loadModels = require('./models.js')(FroYo);

  return function load(){
    console.log('Loading Models');

    loadModels();

  }
}