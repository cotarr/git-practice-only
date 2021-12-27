const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

app.get('/status', (req, res, next) => {
  res.json({ status: 'ok'});
});

app.use(express.static(path.join(__dirname, '../html')));
var server = http.createServer(app);

server.listen(3000);
server.on('listening', function() {
  var address = server.address();
  console.log('listening: ' + address.address + ':' + address.port +
    ' ' + address.family);
});
server.on('error', function(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  if (error.code === 'EACCES') {
    console.log('Port requires elevated privledges');
    process.exit(1);
  }
  if (error.code === 'EADDRINUSE') {
    console.log('Address or port in use');
    process.exit(1);
  }
  throw error;
});
