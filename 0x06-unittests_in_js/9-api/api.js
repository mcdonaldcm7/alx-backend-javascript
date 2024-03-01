const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params['id'];

  if (!isNaN(Number(id))) {
    res.statusCode = 200;
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.statusCode = 404;
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865 ');
});
