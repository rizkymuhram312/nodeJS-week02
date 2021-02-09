//load module http = core module

const http = require('http');

//set port default -> 1337
const port = process.env.PORT || 1337;

//create method with 2 param -> request and respond
const server = http.createServer(function(req,res){
    res.end("Hello NodeJS");
});

server.listen(port);  //buka port
console.log(`Server listennig on port ${port}`)

