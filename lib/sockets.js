module.exports = function(app){
  return function onConnect(socket){
    console.log('A socket.io client ('+ socket.id + ') connected successfully!');
    socket.on('add user', function (data) {
      // we tell the client to execute 'new message'
      console.log("da");
    });
    socket.on('subscribe', function(data) {
      console.log(data);
      socket.join(data.room);
      console.log(socket.id, "joined", data.room);
      console.log(socket.rooms);
      app.sockets.in('teachers').emit('something', 'some Data');
    })
  }
}