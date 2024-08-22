const express = require('express');
const app = express();

const factorial = require('../../../src/node/factorial');

const PORT = process.env.NODE_PORT || 3000;

app.get('/hello', (req, res) => res.send('Hello!'));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));
app.get('/factorial/:num', (req, res) => res.send(factorial(parseInt(req.params.num)).toString()));

const server = app.listen(PORT, () => {
  console.log(`listening ${server.address().address}:${server.address().port}`);
});
