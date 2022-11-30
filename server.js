// ZEDMarkets.io Server
'use strict';
require('dotenv').config();

// PORT
const PORT = process.env.PORT || 3002;

// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const { graphqlHTTP} = require('express-graphql');
const { buildSchema } = require('graphql');
const Horse = require('./models/Horse.js');
// const mongoose = require('mongoose');
// const verifyUser = require('./auth');

// Use
app.use(cors());
app.use(express.json());

//GraphQL Setup
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

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

//ZED API is POST Requests via GraphQL
//ZED API URL: https://zed-ql.zed.run/graphql

//Get all race results

//Get one horse's stats
app.post('/horse_stats', postHorseStats);

//Hawku API is GET Requests
//Hawku URL Ex: https://api.hawku.com/api/v1/marketplace/sales?asset_contract_address=123&timestamp_start=1650860000&timestamp_end=1650869999&offset=100

//Get sales data from timestamp_start to timestamp_end
//Offset is how many results can be shown at once without pagination

// app.get('/sales', getSales);

// Functions

async function postHorseStats(req, res) {
  try{
    console.log(req);
    let results = await Horse.find();
    console.log(results);
    if(results.length > 0) {
      res.status(200).send(results);
    } else {
      res.status(404).send('error');
    }
  } catch(err) {
      res.status(500).send('There was a server error. Please try again later.');
    }
}


// Server Error Handling
app.use('*', (req,res) => {
  res.status(404).send('Route does not exist.');
});

app.use( (error,req,res,next) => {
  res.status(500).send(`Error: ${error.message}`);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
