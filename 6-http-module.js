const http = require('http');
const server = http.createServer((req,res)=>{
     if(req.url == '/')
    res.write('Welcome to Home Page');
    else
    res.write(`
    <h1>Oops!</h>
    <p>couldn't found what you were looking for </p>
    <a href="/">back to home</a>`)
    res.end();
});

server.listen(5000);
 
