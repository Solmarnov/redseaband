const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  src: {
    spotify: { type: String },
    appleMusic: { type: String}
  },
  img: { data: Buffer, contentType: String },
  releaseYear: { type: String }
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;