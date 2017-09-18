var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
    appId: '12345678',
    masterKey: '12345678',
    serverURL: 'http://localhost:8080/parse',
    appName: 'Botplatform',
    publicServerURL: 'http://localhost:8080/parse'
});

app.use('/parse', api);

app.listen(8080, function() {
    console.log('parse server running on port 8080.');
});
