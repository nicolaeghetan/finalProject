const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI
);

const reviewSeed = [
  {
    name: "Nicolae Ghetan",
    place: "Marimore Park",
    review:
      "Execelent customer service, great views and   fantastic photo shoots",
    date: new Date(Date.now())
  },
  {
    name: "Family Smith",
    place: "Alki Beaches",
    review:
      "Inna  was an professional photograph and provides us woth execelent pictures",
    date: new Date(Date.now())
  },
  {
    name: "Brian Jonson",
    place: "Juanita Park",
    review:
      "We discovereed then our  neaberhood park have so many unknow places for us",
    date: new Date(Date.now())
  }
];

db.reviewSchema
  .remove({})
  .then(() => db.reviewSchema.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const placeSeeds = [
    {
        name: "Juanita Park",
        location: "9703 NE Juanita Dr, Kirkland, WA 98034",
        comments: "Great poace for a stuning photo sesion",
        phoneNumber:"4254719802",
        date: new Date(Date.now())
    },
    {
        name: "Marimore Park",
        location: "6046 West Lake Sammamish Pkwy NE, Redmond, WA 98052",
        comments: "Unbeliveble location for great selfie",
        phoneNumber:"4254489525",
        date: new Date(Date.now()) 
    },
    {
        name: "Alki Point",
        location: "4701 SW Admiral Way, Seattle, WA 98007",
        comments: "Unforgeteble location for night photo sesion",
        phoneNumber:"4348489525",
        date: new Date(Date.now()) 
    }
]

db.placeSchema
  .remove({})
  .then(() => db.placeSchema.collection.insertMany(placeSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
