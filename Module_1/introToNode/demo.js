//  var http= require('http');

//  http.createServer(function(req,res){
//     res.write('Helloworld, welcome to node js!');
//     res.end();

//  }).listen(8080);

const http= require("http");
const port=8080;
const host='localhost';
const requestListener= function(req,res){
    res.head(200);  //the code 200 means we are setting status to "OK"
    res.end("Welcoe to node.js");       //this response object will end with the msg typed inside
}

const server= http.createServer(requestListener);
server.listen(port, host, ()=>{
    console.log(`server running on http//:${port} :${host}`)
})