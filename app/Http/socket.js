const http = require('http');
const server = http.createServer()  
const io = use('socket.io')(server)  
io.on('connection', function(socket){
        console.log("the connection is made");
        socket.on('message', function(msg){
        io.emit('message', msg);
  });
});
io.listen(3000);