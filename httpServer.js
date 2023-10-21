const http = require('http');

const server = http.createServer((request, reaponse) => {
    if(request.url === '/'){
        reaponse.end('Welcome  to the Homepage')
    }
    if(request.url === '/about'){
        reaponse.end('Here is some history about our site')
    }
    reaponse.end(`<h1>404</h1>
    <a href="/">back home</a>`);
})

server.listen(8088)


// const http = require('http');
 
// // Create a server
// http.createServer((request, response) => {
 
//     // Sends a chunk of the response body
//     response.write('Hello World!');
 
//     // Signals the server that all of
//     // the response headers and body
//     // have been sent
//     response.end();
// }).listen(3000); // Server listening on port 3000
 
// console.log("Server started on port 3000");