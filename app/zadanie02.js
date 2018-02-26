const express = require('express');
const app = express();

let name = '';

app.get('/name/set/:name', (req, res) => {
    name = req.params.name;
    res.send(`I saved your name, ${name}`);
});

app.get('/name/show', (req, res) => {
  let msg = name ? `Your name is ${name}` : 'You\'ve got no name';
  res.send(msg);
});

app.get('/name/check', (req, res) => {
  let msg = name ? `Your name is set` : 'You\'ve got no name';
  res.send(msg);
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
});
