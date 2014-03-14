FroYo
=====

Will be an API server to rapidly build realtime APIs. Will implement features from ActionHero, SailsJS and Meteor. Will focus on support for AngularJS. Would like to have Angular Services that support a rich query language, caching and more.

## Features
+ Modular
+ Rapid API Development
+ Realtime AngularJS services
+ Background Jobs
+ Websocket Server
+ HTTP Server


## Design

### Service

### Models
Will have a pluggable ORM system included. Will try to allow it to be switched out with any other ORM that is needed. Support for RethinkDB and NeDB will be added first.

#### Spec
+ Associations:
    * Has Many
    * Has One
    * Many to Many
    * Many to Many Through
+ Events: Will broadcast events to allow Servers to send updates to clients and for custom methods to be called.
    + Supported Events:
    *all events will support before and after ex. beforeValidate, afterValidate*
        + Validate
        + Create
        + Delete
        + Update
+ Validations: Needs to support a robust validation system. Would like to have support for unique validation across multiple fields. Could use another library to do impliment this for us.
    * Email
    * Phone Number
    * In Range
    * Max Length
    * Min Length

### Policys
Policies will be used to protect endpoints and services.  Could be used to remove values from responses or prevent clients from deleting attributes.

### Servers
Will be endpoints that clients can connect to. We will support Websockets and HTTP by default.

#### Websockets
Will use Socket.io to implement socket based communiation. 

#### Spec
+ Allow RPC from client to server
+ Allow clients to subscrube to channels/rooms to get realtime updates.
+ Will always respond with JSON.
+ Client will connect through a custom AngularJS service. *Will probably change. I dont know how I feel about this.* After the client connects the it will be bootstrapped with data. This will include allowed actions and controllers. Will also have information on how to validate models. 

##### Client To Server Message Structure
+ `msg:`
    * `controller:` Name of controller to call method on
    * `method:` Name of method to call
    * `payload/params/data:` Data to send to server.

##### Client To Server Actions
+ `subscribe:` Allows a client to subscribe to a `channel.` A `channel` would usually map to a `service`.
    * `name:` String. Name of the `service.
+ `unsubscribe` Allows a client to unsubscribe from a `channel` or `service`

##### Server To Client Actions
+ added
+ changed
+ removed

#### HTTP Server



### Jobs


