var froYo = require('../lib/app');
var config = require('../lib/plugins/config')['config'];
describe('Plugin: Config', function(){

  it('should set app port', function(done){
    config(froYo, function(){
      froYo.config.appPort.should.equal(1337);
      done();
    });
  });
});