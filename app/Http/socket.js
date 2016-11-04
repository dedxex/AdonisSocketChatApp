const http = require('http');
const server = http.createServer();  
const io = use('socket.io')(server);
var co = require('co');
const Conversation = use("App/Model/Conversation");
//creating a list of users
const users = {};  

io.on('connection', function(socket){
      socket.on('register',function(name) {
        users[name]=socket.id;
        console.log("socket id of "+name+" is "+users[name]+" is registered");
      });
    //Sending message to Specific user

        socket.on('messag',function(data_server){
          const name1=data_server.id;
          const name2 = data_server.name;
          const stringg = name1.concat(name2);
          const message = data_server.msg;
          const user = new Conversation();

          co(function* () {
            const conversation = yield Conversation.query().where('name', stringg)
          console.log(conversation);
          //const conversation = yield Conversation.findBy('name', stringg ).all();
          //console.log(conversation);
          return conversation;
        })
        .then(function(res) {
          console.log("response found "+res.name);
          const socketId = users[name2];
          console.log("response sent to socketId ",socketId+" of name "+name2);
          //socket.broadcast.to(socketId).emit('conversation',res);
          io.emit('conversation',res);
          console.log("the response sent to "+res);
        }, function (err) {
            console.error(err.stack);
        });

        co(function* () {
          user.name = stringg;
          user.message = message;
          yield user.save()
          console.log(user);
          return user;
        }).then(function (responseData) {
            console.log(responseData);
        }, function (err) {
            console.error(err.stack);
        });

        
        console.log("messag event triggered");
        console.log("message"+data_server.msg+" is sent to " + data_server.id + ","  + " from" + data_server.name);
        
        //socket.broadcast.to(data_server.id).emit('message', data_server.msg);
        //socket.emit('message',data_server.msg);
        const name = data_server.id;
        const socketId = users[data_server.id];
        console.log("preparing to send to socketId "+socketId+" of name "+name+" by "+data_server.name);
        socket.broadcast.to(socketId).emit('message', data_server.msg);
      });

    // socket.on('messag', function(msg){
    // io.emit('message', msg);
  });

io.listen(3000);