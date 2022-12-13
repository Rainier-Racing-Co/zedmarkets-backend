'use strict';
require('dotenv').config();

// REQUIRE
const express = require('express');
const app = express();
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/horse_stat_schema.js');
var horse = require('./modules/horse.js');
// const mongoose = require('mongoose');
// const verifyUser = require('./auth');
// const Horse = require('./models/Horse.js');

// Use
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
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

// ROUTES
app.get('/test', (req, res) => {
  res.send('Hello, from the ZEDMarket.io server! Test complete; sever operational.');
});

app.get('/horse', horse);
//ZED API is POST Requests via GraphQL
//ZED API URL: https://zed-ql.zed.run/graphql

//Get all race results

//Get one horse's stats


//Hawku API is GET Requests
//Hawku URL Ex: https://api.hawku.com/api/v1/marketplace/sales?asset_contract_address=123&timestamp_start=1650860000&timestamp_end=1650869999&offset=100

//Get sales data from timestamp_start to timestamp_end
//Offset is how many results can be shown at once without pagination

// app.get('/sales', getSales);

// Functions
// TODO

// Server Error Handling
app.use('*', (req,res) => {
  res.status(404).send('Route does not exist.');
});

app.use( (error,req,res,next) => {
  res.status(500).send(`Error: ${error.message}`);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
