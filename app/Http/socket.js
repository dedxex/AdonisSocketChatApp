const http = require('http');
const server = http.createServer();  
const io = use('socket.io')(server);
//creating a list of users
const users = {};  
io.on('connection', function(socket){
      socket.on('register',function(name) {
        users[name]=socket.id;
        console.log("socket id of "+name+" is "+users[name]+" is registered");
      });
    //Sending message to Specific user

        socket.on('messag',function(data_server){
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