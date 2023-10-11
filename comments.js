// Create web server
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

// Path: comments.js
// Start web server
server.listen(port);
console.log('Server listening on port ' + port);