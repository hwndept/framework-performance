const express = require('express');
const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.get('/', (req, res) => res.send('Hello!'));
app.get('/:name', (req, res) => res.send(`Hello ${req.params.name}!`));

const server = app.listen(PORT, () => {
  console.log(`listening ${server.address().address}:${server.address().port}`);
});
