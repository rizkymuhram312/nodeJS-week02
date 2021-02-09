const http = require('http');
const port = process.env.PORT || 1337;

const product ={
    id:1,
    names:"Laptop",
    price:150000,
    variant : {
        type:"Game",
        core :"i7 Core"
    }
}

const server = http.createServer(function(req,res){
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(product));
});

server.listen(port);  //buka port
console.log(`Server listennig on port ${port}`)

