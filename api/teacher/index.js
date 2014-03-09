/**
 * GET all teachers.
 */
var thinky = require('../../thinky').thinky;
var Teacher = thinky.createModel('Teacher', {
  id: String,
  firstName: String,
  lastName: String
});
exports.all = function *(){
  this.body = yield Teacher.run();
};

/**
 * GET a single stat.
 */

exports.get = function *(){
  this.body = stats[this.params.name];
};