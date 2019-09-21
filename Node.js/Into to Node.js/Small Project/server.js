const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 4000;




let server = http.createServer((req,res) => {
    const pathName = url.parse(req.url).pathname;


    if(pathName === '/') {
       res.end("Home page!")
        return
    } else if(pathName === '/about') {
        res.end("Second page!");
        return;
    }})
    


server.listen(port,() => {
    console.log("The server run!!!")
})
