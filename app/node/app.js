const http = require('http');

const PORT = 3000;

const routes = [
  { url: /^\/$/, handler: (params, res) => res.end('Hello!') },
  { url: /^\/(.+?)$/, handler: (params, res) => res.end(`Hello ${params[0]}!`) }
];

const app = http.createServer((req, res) => {
  routes.some((route) => {
    const matches = req.url.match(route.url);
    if (matches !== null && matches.length > 0) {
      route.handler(matches.slice(1), res);
      return true;
    }
  });
});

const server = app.listen(3000, () => {
  console.log(`listening ${server.address().address}:${server.address().port}`);
});
