var froYo = require('../lib/app');
var sockets = require('../lib/plugins/sockets')['sockets'];
describe('Plugin: Sockets', function(){
  before(function(done){
    sockets(froYo, function(){
      done();
    });
  });
  it('should plugins.io', function(){
    console.log(froYo);
  });
});