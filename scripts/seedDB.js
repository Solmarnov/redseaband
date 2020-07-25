const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Music collection and inserts the music below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/redseaband'
);

const musicSeed = [
  {
    title: "Battlescar",
    type: "EP",
    src: {
      spotify: "https://open.spotify.com/embed/album/1Y8AhtmqSLi1DvwNPj3SZq",
      appleMusic: "https://embed.music.apple.com/au/album/battlescar-ep/1148468921?app=music"
    },
    releaseYear: "2016"
  }
]

db.Music
.remove({})
.then(() => db.Book.collection.insertMany(musicSeed))
.then(data => {
  console.log(data.result.n + " records inserted.");
  process.exit(0);
})
.catch(err => {
  console.error(`
    Error encountered in seedDB.js 
    ${err}
  `);
  process.exit(1);
});