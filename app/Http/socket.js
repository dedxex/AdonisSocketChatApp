const http = require('http');
const server = http.createServer();  
const io = use('socket.io')(server);
//creating a list of users
const users = {};  
io.on('connection', function(socket){
      socket.on('register',function(name) {
        users.name=socket.id;
        console.log("socket id is "+users.name);
      });
    //Sending message to Specific user
      socket.on('messag',function(data_server){
        console.log("messag event triggered");
        console.log("message is recieved " + data_server.id + " " + data_server.msg + " " + data_server.name);
        //socket.broadcast.to(data_server.id).emit('message', data_server.msg);
      socket.emit('message',data_server.msg);
    });
    // socket.on('messag', function(msg){
    // io.emit('message', msg);
  });

io.listen(3000);