const server = require('./start');
const { port } = require('./config');

server.start(port).then(() => console.log(`Server started at ${port}`));

process.on('SIGINT', () => {
  server.stop();
});
