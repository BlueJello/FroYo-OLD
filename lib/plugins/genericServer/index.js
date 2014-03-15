var genericServer = function(froYo, next){
  // I am the prototypical generic server that all other types of servers inherit from.
  // I shouldn't actually be used by a client
  // Note the methods in this template server, as they are all required for 'real' servers

  ////////////////////
  // COMMON METHODS //
  ////////////////////

  // options are meant to be configurable in 'config.js'
  // attributes are descriptions of the server:
  /*

    attributes = {
      canChat: true,
      logConnections: true,
      logExits: true,
      sendWelcomeMessage: true,
      verbs: ['say', 'detailsView']
    }

  */

  froYo.plugins.genericServer = function(name){
    this.type = name;
    // this.options = options;
    // this.attributes = attributes;

    // // you can overwrite attributes with options
    // // this could cause some problems, be careful
    // for(var key in this.options){
    //   if(this.attributes[key] != null){
    //     this.attributes[key] = this.options[key];
    //   }
    // }
  }

  froYo.plugins.genericServer.prototype.runControllerAction = function(data){
    console.log(data);
    if (data.msg === 'method')
      console.log('method');
  }

  // froYo.plugins.genericServer.prototype.processFile = function(connection){
  //   var self = this;
  //   froYo.staticFile.get(connection, function(connection, error, fileStream, mime, length){
  //     self.sendFile(connection, error, fileStream, mime, length);
  //   });
  // }


  froYo.plugins.genericServer.prototype.log = function(message, severity, data){
    froYo.log('[server: ' + this.type + '] ' + message, severity, data);
  }

  var methodNotDefined = function(){
    throw new Error('The containing method should be defined for this server type');
  }

  ///////////////////////////////////////
  // METHODS WHICH MUST BE OVERWRITTEN //
  ///////////////////////////////////////

  // I am invoked as part of boot
  froYo.plugins.genericServer.prototype._start = function(next){ methodNotDefined() }

  // I am invoked as part of shutdown
  froYo.plugins.genericServer.prototype._stop = function(next){ methodNotDefined() }

  // This method will be appended to the connection as 'connection.sendMessage'
  // froYo.plugins.genericServer.prototype.sendMessage = function(connection, message){ methodNotDefined() }

  // This method will be used to gracefully disconnect the client
  // froYo.plugins.genericServer.prototype.goodbye = function(connection, reason){ methodNotDefined() }

  next();

};

exports.genericServer = genericServer;