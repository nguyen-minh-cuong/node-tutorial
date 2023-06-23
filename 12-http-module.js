const http = require('http');
const server =  http.createServer((req,res)=> { if (req.url === '/') {res.end( '<p> what are you looking for </p>')};
if (req.url === '/about') {res.end( '<p> this is our short history </p>')};
res.end(`<p>no you're wrong</p>
         <a href='/'>back home <a>`)

});

server.listen(8080);