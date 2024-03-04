// const express = require('express');
// const router = require('./routes/index.js');

import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);

app.listen(1245, () => {
  console.log('...');
});

// module.exports = app;

export default app;
