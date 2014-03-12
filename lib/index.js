var froYo = require('./app');

// var froYo = new FroYo();

// console.log(froYo);
froYo.launch(function(a){
  console.log('a', a);
});
// froYo.load();
console.log(froYo.services.teacher.find());
console.log(froYo);