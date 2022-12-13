'use strict';

// REQUIRE
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLFloat } = graphql;
const _ = require('lodash');
// Dummy Data

let horses = [{
  "bloodline": "Finney",
  "breed_type": "exclusive",
  "breeding_counter": 1,
  "color": "Anti-Flash White",
  "gen": "Z15",
  "horse_type": "Stallion",
  "img_url": "https://img.zed.run/horses/F2F3F4.png",
  "inserted_at": "2022-06-16T22:45:17",
  "last_breeding_reset": "2022-11-03T22:40:47Z",
  "name": "Retro Dancer",
  "offsprings": [
    {
      "bloodline": "Buterin",
      "breed_type": "cross",
      "color": "Flex",
      "gen": "Z44",
      "horse_type": "Mare",
      "nft_id": 444782,
      "race_statistic": {
        "first_place_finishes": 13,
        "number_of_races": 115,
        "second_place_finishes": 10,
        "third_place_finishes": 15,
        "win_rate": 11.3
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Midnight Black",
      "gen": "Z28",
      "horse_type": "Stallion",
      "nft_id": 445632,
      "race_statistic": {
        "first_place_finishes": 51,
        "number_of_races": 332,
        "second_place_finishes": 20,
        "third_place_finishes": 20,
        "win_rate": 15.36
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Anti-Flash White",
      "gen": "Z17",
      "horse_type": "Filly",
      "nft_id": 446042,
      "race_statistic": {
        "first_place_finishes": 0,
        "number_of_races": 0,
        "second_place_finishes": 0,
        "third_place_finishes": 0,
        "win_rate": 0.0
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Suave Mauve",
      "gen": "Z18",
      "horse_type": "Stallion",
      "nft_id": 468732,
      "race_statistic": {
        "first_place_finishes": 8,
        "number_of_races": 38,
        "second_place_finishes": 2,
        "third_place_finishes": 2,
        "win_rate": 21.05
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Fawn",
      "gen": "Z37",
      "horse_type": "Mare",
      "nft_id": 469052,
      "race_statistic": {
        "first_place_finishes": 25,
        "number_of_races": 163,
        "second_place_finishes": 17,
        "third_place_finishes": 19,
        "win_rate": 15.34
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "cross",
      "color": "Caribbean Green",
      "gen": "Z35",
      "horse_type": "Stallion",
      "nft_id": 469276,
      "race_statistic": {
        "first_place_finishes": 23,
        "number_of_races": 308,
        "second_place_finishes": 19,
        "third_place_finishes": 20,
        "win_rate": 7.47
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Azure Mist",
      "gen": "Z20",
      "horse_type": "Colt",
      "nft_id": 481870,
      "race_statistic": {
        "first_place_finishes": 2,
        "number_of_races": 29,
        "second_place_finishes": 3,
        "third_place_finishes": 2,
        "win_rate": 6.9
      }
    },
    {
      "bloodline": "Buterin",
      "breed_type": "elite",
      "color": "Buff Gold",
      "gen": "Z25",
      "horse_type": "Filly",
      "nft_id": 482086,
      "race_statistic": {
        "first_place_finishes": 6,
        "number_of_races": 52,
        "second_place_finishes": 6,
        "third_place_finishes": 7,
        "win_rate": 11.54
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "cross",
      "color": "Caribbean Green",
      "gen": "Z22",
      "horse_type": "Colt",
      "nft_id": 485625,
      "race_statistic": {
        "first_place_finishes": 0,
        "number_of_races": 41,
        "second_place_finishes": 5,
        "third_place_finishes": 2,
        "win_rate": 0.0
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Black Chocolate",
      "gen": "Z21",
      "horse_type": "Mare",
      "nft_id": 494991,
      "race_statistic": {
        "first_place_finishes": 11,
        "number_of_races": 58,
        "second_place_finishes": 6,
        "third_place_finishes": 4,
        "win_rate": 18.97
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Azure",
      "gen": "Z27",
      "horse_type": "Filly",
      "nft_id": 495317,
      "race_statistic": {
        "first_place_finishes": 3,
        "number_of_races": 23,
        "second_place_finishes": 4,
        "third_place_finishes": 2,
        "win_rate": 13.04
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Black Chocolate",
      "gen": "Z17",
      "horse_type": "Filly",
      "nft_id": 495766,
      "race_statistic": {
        "first_place_finishes": 1,
        "number_of_races": 21,
        "second_place_finishes": 2,
        "third_place_finishes": 3,
        "win_rate": 4.76
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "elite",
      "color": "Battle Horse Gray",
      "gen": "Z23",
      "horse_type": "Colt",
      "nft_id": 506547,
      "race_statistic": {
        "first_place_finishes": 0,
        "number_of_races": 7,
        "second_place_finishes": 1,
        "third_place_finishes": 1,
        "win_rate": 0.0
      }
    },
    {
      "bloodline": "Finney",
      "breed_type": "cross",
      "color": "Midnight Black",
      "gen": "Z34",
      "horse_type": "Filly",
      "nft_id": 506548,
      "race_statistic": {
        "first_place_finishes": 0,
        "number_of_races": 6,
        "second_place_finishes": 1,
        "third_place_finishes": 0,
        "win_rate": 0.0
      }
    }
  ],
  "race_statistic": {
    "first_place_finishes": 45,
    "number_of_races": 393,
    "second_place_finishes": 39,
    "third_place_finishes": 32,
    "win_rate": 11.45
  }
}];

// Horse Schema
const HorseType = new GraphQLObjectType({
  name: 'Horse',
  fields: () => ({
    name: {type: GraphQLString},
    nft_id: {type: GraphQLInt},
    img_url: {type: GraphQLString},
    gen: {type: GraphQLString},
    bloodline: {type: GraphQLString},
    breed_type: {type: GraphQLString},
    color: {type: GraphQLString},
    breeding_counter: {type: GraphQLInt},
    horse_type: {type: GraphQLString},
    race_statistic: {type: GraphQLString
      // first_place_finishes: {type: GraphQLInt},
      // second_place_finishes: {type: GraphQLInt},
      // third_place_finishes: {type: GraphQLInt},
      // number_of_races: {type: GraphQLInt},
      // win_rate: {type: GraphQLFloat}
    },
    offsprings: {
      bloodline: {type: GraphQLString},
      breed_type: {type: GraphQLString},
      color: {type: GraphQLString},
      gen: {type: GraphQLString},
      horse_type: {type: GraphQLString},
      nft_id: {type: GraphQLInt},
      race_statistic: {
        first_place_finishes: {type: GraphQLInt},
        second_place_finishes: {type: GraphQLInt},
        third_place_finishes: {type: GraphQLInt},
        number_of_races: {type: GraphQLInt},
        win_rate: {type: GraphQLFloat}
      },
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    horse: {
      type: HorseType,
      args: {nft_id: {type: GraphQLInt}},
      resolve(parent, args){
        //code to get data from db/other source
        return _find(horses, {nft_id: args.nft_id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
