const express = require('express');
const app = express();

app.use(express.json());

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

app.get('/available_payments', (req, res) => {
  res.statusCode = 200;
  res.json({ 'payment_methods': { 'credit_cards': true, 'paypal': false } });
});

app.post('/login', (req, res) => {
  const userName = req.body['userName'];
  res.statusCode = 200;
  res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865 ');
});
