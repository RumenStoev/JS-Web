const http = require("http");
const fs = require("fs");
const url = require("url")
const path = require("path");
const port = 4000;


let server = http.createServer((req,res) => {
  if(req.url === "/") {
    res.write("Hello Node.js!")
    res.end
  }
  else {
    console.log("Write a correct url")
  }
})



server.listen(() => {
  console.log("The server run!!!")
})
