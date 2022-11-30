// ZEDMarkets.io Server
'use strict';
require('dotenv').config();

// PORT
const PORT = process.env.PORT || 3002;

// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
// const mongoose = require('mongoose');
// const verifyUser = require('./auth');

// Use
app.use(cors());
app.use(express.json());

// Connect DB
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function() {
//   console.log('Mongoose is connected')
// });

// async function connectMongoose() {
//   mongoose.connect(process.env.DB_URL)
// }
// connectMongoose();

// Routes
app.get('/test', (req, res) => {
  res.send('Hello, from the ZEDMarket.io server! Test complete; sever operational.');
});



// Server Error Handling
app.use('*', (req,res) => {
  res.status(404).send('Route does not exist.');
});

app.use( (error,req,res,next) => {
  res.status(500).send(`Error: ${error.message}`);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
