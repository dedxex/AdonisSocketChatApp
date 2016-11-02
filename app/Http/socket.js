const http = require('http');
const server = http.createServer();  
const io = use('socket.io')(server);
//creating a list of users
const users = [];  
io.on('connection', function(socket){
    //Sending message to Specific user
      socket.on('message',function(data_server){
      console.log("message is recieved "+data_server.id+" "+data_server.msg+" "+data_server.name);
      socket.broadcast.to(data_server.id).emit({msg:data_server.msg,id:data_server.id,name:data_server.name});
    });
});

io.listen(3000);