var sockets = function(froYo, next){
  var io = froYo.plugins.io = require('socket.io').listen(froYo.plugins.http.server);
  var type = 'socket';
  console.log(froYo);
  var server = new froYo.plugins.genericServer(type);

  io.on('connection', function(socket){
    froYo.log.silly('A socket.io client ('+ socket.id + ') connected successfully!');
    socket.on('msg', function(data){
      console.log(data);
      try {
        var msg = JSON.parse(data);
      } catch (e){
        console.log(e);
        return null;
      }
      server.runControllerAction(msg);
    });
  });
  console.log(server);
  next();
};
exports.sockets = sockets;

// var sockets = function(froYo, next){
//   froYo.log.silly('Loading socket.io');
//   var io = froYo.plugins.io = require('socket.io').listen(froYo.plugins.http.server);

//   io.on('connection', function(socket){
//     froYo.log.silly('A socket.io client ('+ socket.id + ') connected successfully!');
//     socket.on('add user', function(data) {
//       // we tell the client to execute 'new message'
//       console.log('da', data);
//     });
//     socket.on('msg', function(data){
//       // if(data.controller){
//       //   console.log(data.controller);
//       //   froYo.controllers[data.controller.toLowerCase()].find();
//       // }
//       froYo.controller.run()
//       console.log(data);
//     });
//     socket.on('subscribe', function(data) {

//       socket.join(data.room);

//       froYo.log.silly(socket.id, 'joined', data.room);

//       froYo.plugins.io.sockets.in('teachers').emit('something', 'some Data');
//     })
//   });
//   next();
// }

// exports.sockets = sockets;

