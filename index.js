var server = require('./test.js');
var router = require('./route.js');

server.start(router.route);
