var request = require('supertest');
var froYo = require('../lib/app');
var Express = require('express')();
var express = require('../lib/plugins/express')['express'];
describe('Plugin: Express', function(){
  before(function(done){
    express(froYo, function(){
      done();
    })
  });
  it('should set an http plugin object', function(){
    froYo.plugins.http.should.be.a.Object;
  });
  it('should set an http app function', function(){
    froYo.plugins.http.app.should.be.a.Function;
  });
  it('should set an http server', function(){
    froYo.plugins.http.server.should.be.an.Object;
  });
  it('should serve static files', function(done){
      request(froYo.plugins.http.app)
      .get('/')
      .expect(200)
      .end(done);
  });
});