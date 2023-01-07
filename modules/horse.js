const axios = require('axios');
// const { request, response } = require('express');
const { req, res } = require('express');

const GRAPHQL_API = 'https://zed-ql.zed.run/graphql';
const GET_HORSE_DATA_QUERY = `
query($input: HorseInput) {
	horse(input: $input) {
		name
		nft_id
		img_url
		gen
		bloodline
		breed_type
		color
		inserted_at
		last_breeding_reset
		breeding_counter
		horse_type
		race_statistic {
			first_place_finishes
			second_place_finishes
			third_place_finishes
			number_of_races
			win_rate
		}
    offsprings {
			bloodline
			breed_type
			color
			gen
			horse_type
			nft_id
			race_statistic {
				first_place_finishes
				second_place_finishes
				third_place_finishes
				number_of_races
				win_rate
				positions_per_distance{
					distance
					positions{
						frequency
						position
					}
				}
			}
	  }
  }
}
`;

let horse = async function (req, res) {
  try{
    const queryResult = await axios.post(
      GRAPHQL_API, {
        query: GET_HORSE_DATA_QUERY,
        headers: {"Content-Type":"application/json"},
        variables: {
          "input": {
            "horse_id": parseInt(req.query.horse)
          }
        }
      });
    const horseResult = queryResult.data.data.horse;
    res.status(200).send(horseResult);
  } catch(err) {
    console.log('Error: ', err.message);
  }
};

module.exports = horse;
