const express = require('express');
const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.get('/hello', (req, res) => res.send('Hello!'));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));

const server = app.listen(PORT, () => {
  console.log(`listening ${server.address().address}:${server.address().port}`);
});
