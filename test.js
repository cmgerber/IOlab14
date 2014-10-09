console.log('Hello world');

var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write ('Hello world');
	response.end();
}).listen(9000);

// var requestFunction = function(request, response) {
//     response.writeHead(200);
//     response.end('hello world');
// }
