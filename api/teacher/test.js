
var request = require('supertest');
var api = require('../..');

describe('GET /teacher', function(){
  it('should respond with stats', function(done){
    var app = api();
    request(app.listen())
    .get('/teacher')
    .expect("test")
    .end(done);
  })
})