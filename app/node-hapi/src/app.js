const hapi = require('hapi');

const factorial = require('../../../src/node/factorial');

const PORT = process.env.NODE_PORT || 3000;

const server = new hapi.Server();

server.connection({
  port: PORT
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server is running at:', server.info.uri);

  server.route({
    method: 'GET',
    path:'/hello',
    handler(req, reply) {
      reply('Hello!');
    }
  });

  server.route({
    method: 'GET',
    path:'/hello/{name}',
    handler(req, reply) {
      reply(`Hello ${req.params.name}!`);
    }
  });

  server.route({
    method: 'GET',
    path:'/factorial/{num}',
    handler(req, reply) {
      reply(factorial(parseInt(req.params.num)));
    }
  });
});
