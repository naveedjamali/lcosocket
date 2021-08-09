const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
      origin: "*",
      
    }
  });

io.on("connection", (socket)=>{
console.log("This is the socket: ", socket);
console.log("Socket is Active to be connected");

socket.on("chat", (payload)=>{
console.log("What is Payload: ", payload);

io.emit("chat", payload)

});


});

//app.listen(5000, ()=>{console.log("Server is active at 5000")})
server.listen(5000,()=>{console.log("Server is listening at port 5000")});