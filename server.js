var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './prod',            // required, the root of the server file tree
    port: 6001,               // required, the port to listen
});

server.start(function () {
    console.log('Server Satarted At Port : ', server.port);
});