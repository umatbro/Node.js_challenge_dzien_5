const express = require('express');
const app = express();

app.get('/sum/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  res.send((num1+num2).toString());
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
