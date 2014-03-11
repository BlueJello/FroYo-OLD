FroYo
=====

Will be an API server to rapidly build realtime APIs. Will implement features from ActionHero, SailsJS and Meteor. Will focus on support for AngularJS. Would like to have Angular Services that support a rich query language, caching and more.

## Features
+ Modular
+ Rapid API Development
+ Realtime AngularJS services
+ Background Jobs
+ Websockets
+ HTTP


## Design

### Service

### Models

### Servers

#### Websockets
Will use Socket.io to implement socket communiation. 
#### Features
+ Allows RPC from client to server
+ Allows clients to subscribe to channels/rooms to get realtime updates.

#### Spec
+ Will always respond with JSON.
+ Client will connect through a custom AngularJS service. *Will probably change. I dont know how I feel about this.* After the client connects the it will be bootstrapped with data. This will include allowed actions and controllers. Will also have information on how to validate models. 

##### Actions
+ `subscribe:` Allows a client to subscribe to a `channel.` A `channel` would usually map to a [Service][#service].
    * `name:` String. Name of the [Service][#service].
+ `unsubscribe` Allows a client to unsubscribe from a `channel` or `service`
+ added
+ changed
+ removed



### Jobs


