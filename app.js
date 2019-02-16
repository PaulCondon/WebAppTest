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





// var http = require('http');

// var port = 3000;
// http.createServer(function (req, res) {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Hello there, world!\n');

// }).listen(port);
// console.log('Listening on port', port);


