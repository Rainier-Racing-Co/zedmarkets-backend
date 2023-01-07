require('dotenv').config();
const axios = require('axios');
const { parseInt } = require('lodash');

let markets = async function (req, res) {
  try{
    const start_date_str = req.query.start_date;
    const end_date_str = req.query.end_date;
    const start_date_timestamp = parseInt(start_date_str);
    const end_date_timestamp = parseInt(end_date_str);
    console.log(typeof end_date_timestamp)

    const marketData = await axios.get(process.env.HAWKU_URL, {
      headers: {
        'X-HAWKU-TOKEN': process.env.HAWKU_API_KEY
      },
      params: {
        timestamp_start: start_date_timestamp,
        timestamp_end: end_date_timestamp,
        offset: 0,
        collection_slug: 'zed_horse'
      },
    });
    console.log('Success!');
    res.status(200).send(marketData.data);
  }catch(err){
    console.log('Error: ', err.message);
  }
}

module.exports = markets;
