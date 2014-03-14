var froYo = require('../lib/app');
var globals = require('../lib/plugins/globals')['globals'];
describe('Plugin: Globals', function(){
  before(function(done){
    globals(froYo, function(){
      done();
    })
  });
  it('should expose globals', function(){
    async.should.be.an.Object;
    _.should.be.a.Function;
  });
});