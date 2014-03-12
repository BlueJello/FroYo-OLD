/**
 * TeacherController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
  find: function(req,res){
    console.log('test');

  },
  create: function(req,res){
    Teacher.count().exec(function(err,count){
      Teacher.find(req.param('id')).paginate({page: Number(req.query.page || 1), limit: Number(req.query.pageSize || 10)}).exec(function(err, data, data2) {
        res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
        res.setHeader('X-Total-Count', count);
        res.json(data);
      });
    })

  }
};
