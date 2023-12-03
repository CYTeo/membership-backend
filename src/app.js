// import express from 'express';
// import { connectDB } from './database';

const express = require('express');
require('dotenv').config();
const connectDB = require('./database');

// define a new instance express app
const app = express();

// connect to mongodb
connectDB();

// start creating api?
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
