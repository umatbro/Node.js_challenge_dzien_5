const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/contact', (req, res) => {
  res.send('Zapraszam do kontaktu :)');
})

app.get('/hello/:name', (req, res) => {
  let name = req.params.name;
  res.send(`Hello, ${name}`);
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
