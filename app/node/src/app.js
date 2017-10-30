const http = require('http');

const PORT = process.env.NODE_PORT || 3000;

const routes = [
  { url: /^\/$/, handler: (params, res) => res.end('Hello!') },
  { url: /^\/(.+?)$/, handler: (params, res) => res.end(`Hello ${params[0]}!`) }
];

const app = http.createServer((req, res) => {
  const reqHandled = routes.some((route) => {
    const matches = req.url.match(route.url);
    if (matches !== null && matches.length > 0) {
      route.handler(matches.slice(1), res);
      return true;
    }
  });
  
  if (!reqHandled) {
    res.statusCode = 404; 
    res.end();
  }
});

const server = app.listen(PORT, () => {
  console.log(`listening ${server.address().address}:${server.address().port}`);
});
