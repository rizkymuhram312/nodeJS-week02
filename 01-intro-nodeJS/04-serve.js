const { fstat } = require('fs');
const http = require('http');
const fs = require('fs');
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
    if(req.url === '/') return responseText(req,res); //hasilnya yaitu JS Bootcamp
    if(req.url === '/json') return responseJSON(req,res); //hasilnya JSON Product
    if(req.url.match(/^\/static/)) return responseStatic(req,res)
    respondNotFound(req,res);
});

function responseText(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end("JS Bootcamp")
}

function responseJSON(req,res){
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(product));
}

function responseStatic(req,res){
    const filename = `${__dirname}/public${req.url.split('/static')[1]}`;
    fs.createReadStream(filename)
    .on("Error", ()=> respondNotFound(req,res))
    .pipe(res);
}

function respondNotFound(req,res){
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Page not found")
}

server.listen(port);  //buka port
console.log(`Server listennig on port ${port}`) //use backtip

