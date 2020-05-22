// On the backend so using common.js module syntax
// On the frontend with react we can use es2015 (aka es6)
const express = require('express');
// dotenv allows us to use environment variables
const dotenv = require('dotenv');
// colors allows us to use nice colours in the console
const colors = require('colors');
// morgan is a loggin tool
const morgan = require('morgan');

dotenv.config({ path: 'config/config.env' });

const transactions = require('./routes/transactions');
const app = express();

app.use('/api/v1/transactions', transactions);

app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
