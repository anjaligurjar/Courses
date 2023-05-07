const express = require('express');
const mongoose = require('./db.js');
const config = require('./config');

const app = express();
app.listen(config.PORT, () => {
  console.log('serve at http://localhost:5000');
});
