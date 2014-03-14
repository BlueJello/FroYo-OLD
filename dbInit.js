var r = require('rethinkdb');
var config = require('./config.js');
var util = require('util');

var connection;

// Connect
var connect = function() {
    r.connect({
        host: config.host,
        port: config.port,
        db: config.db
    }, function(error, conn) {
        if (error) throw error;
        connection = conn;
        insertTeacher();
    });
}

// Create the database
var createDatabase = function() {
    r.dbCreate(config.db).run(connection, function(error, result) {
        if (error) console.log(error);
        if ((result != null) && (result.created === 1)) {
            console.log('Database `FroYo` created');
        }
        else {
            console.log('Error: Database `FroYo` not created');
        }
        insertTeacher();
    })
}

// // Create the table Teacher
// var createTableTeacher = function() {
//     r.db(config.db).tableCreate('Teacher').run(connection, function(error, result) {
//         if (error) console.log(error);

//         if ((result != null) && (result.created === 1)) {
//             console.log('Table `Teacher` created');
//         }
//         else {
//             console.log('Error: Table `Teacher` not created');
//         }
//         insertTeacher()
//     });
// }

// Insert teacher
var insertTeacher = function() {
  r.db(config.db).table('Teacher').insert([{"firstName":"Angi","lastName":"Price","id":"10b8173c-2f4b-4d77-97bc-84f52292048e"}]).run(connection, function(error, result){
      if (error) console.log(error);

      if ((result != null) && (result.errors === 0)) {
          console.log('Added comments data');
      }
      else {
          console.log('Error: Failed to add comment data');
      }
      connection.close();
      process.exit();
  });
}

// Roll out everything
connect();