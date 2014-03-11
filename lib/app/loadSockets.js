
module.exports = function(froYo){

    return function loadExpress(cb){
      froYo.log.silly('Loading socket.io');
      var io = froYo.plugins.io = require('socket.io')(froYo.plugins.http.server);

      io.on('connection', function(socket){
        froYo.log.silly('A socket.io client ('+ socket.id + ') connected successfully!');
        socket.on('add user', function (data) {
          // we tell the client to execute 'new message'
          console.log("da");
        });
        socket.on('subscribe', function(data) {

          socket.join(data.room);

          froYo.log.silly(socket.id, "joined", data.room);

          froYo.plugins.io.sockets.in('teachers').emit('something', 'some Data');
        })
      });

      cb(null, froYo);
    }
}