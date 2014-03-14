var froYo = require('../lib/app');
describe('Core: FroYo', function(){

  it('should inherit from event emitter', function(done){
    froYo.on('foo', done);
    froYo.emit('foo');
  });
  it('should have the correct functions', function(){
    [
      froYo.load,
      froYo.launch
    ].forEach(function(item){
      item.should.be.an.instanceOf(Function);
    });

  });
  it('should have the correct api path and app path', function(){
    froYo.appPath.should.equal(process.cwd());
    froYo.apiPath.should.equal(process.cwd() + '/api');
  });
});