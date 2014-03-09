var Primus = require('primus'),
    http = require('http'),
    fs = require('fs');


server = http.createServer(function server(req, res) {
  res.setHeader('Content-Type', 'text/html');
  fs.createReadStream(
    __dirname + (~req.url.indexOf('primus.js') ? '/primus.js' : '/index.html')
  ).pipe(res);
});


var primus = new Primus(server, { transformer: 'sockjs', pathname: '/primusexample'});


//
// Listen for new connections and send data
//
primus.on('connection', function connection(spark) {
  console.log('new connection');

  spark.on('data', function data(packet) {
    console.log('incoming:', packet);

    //
    // Close the connection.
    //
    if (packet === 'end') spark.end();

    //
    // Echo the responses.
    //
    if (packet.echo) spark.write(packet.echo);

    //
    // Pipe in some data.
    //
    if (packet.pipe) fs.createReadStream(__dirname + '/index.html').pipe(spark, {
      end: false
    });

    //
    // Major server kill;
    //
    if (packet !== 'kill') return;

    primus.write('Spark: '+spark.id +' asked for a full server kill. Server will be killed within 5 seconds');
    setTimeout(process.exit, 5000);
  });
});

//
// Save the compiled file to the hard disk so it can also be distributed over
// cdn's or just be served by something else than the build-in path.
//
primus.save('primus.js');

//
// Everything is ready, listen to a port number to start the server.
//
server.listen(4000);

