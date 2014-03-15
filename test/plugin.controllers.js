var froYo = require('../lib/app');
var controller = require('../lib/plugins/controller')['controller'];
describe('Plugin: Controller', function(){
  before(function(done){
    controller(froYo, function(){
      done();
    });
  });
  it('should setup controllers', function(){
    froYo.controller.should.be.an.Object;
    froYo.controller.controllers.should.be.an.Object;
    // controllers(froYo, function(){
    //   froYo.controllers.appPort.should.equal(1337);
    //   done();
    // });
  });
  it('should have a froYo.runControllerAction', function(){
    console.log(froYo);
  })
});