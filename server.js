
/**
 * Very simple http server,
 * needs to get to work ajax requests.
 * Depends on 'connect'.
 */

var port = 8080;
var connect = require( 'connect' );

connect.createServer(
    connect.static( __dirname )
).listen( port );

console.log('Server started and listening ', port);