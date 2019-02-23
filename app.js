const http = require('http');
const fs = require('fs');

const port = '3000';
fs.readFile('index.html', (err, html) =>{
    if(err){
        throw err;
    }

    http.createServer((req ,res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    }).listen(port);
     console.log('Listening on port', port);

});

// var express = require('express')
// var fs = require('fs')
// var https = require('https')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app)
// .listen(3000, function () {
//   console.log('Example app listening on port 3000! Go to https://localhost:3000/')
// })



// var http = require('http');

// var port = 3000;
// http.createServer(function (req, res) {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Hello there, world!\n');

// }).listen(port);
// console.log('Listening on port', port);


