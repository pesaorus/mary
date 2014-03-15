
/**
 * Very simple http server,
 * needs to get to work ajax requests.
 * Depends on 'connect'.
 */
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);