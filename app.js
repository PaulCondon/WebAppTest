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