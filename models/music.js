const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: { 
    type: String, 
    required: [true, 'Please provide a title.']
  },
  type: { 
    type: String, 
    required: [true, 'Please select a type.']
  },
  src: {
    spotify: { 
      type: String, 
      unique: true
    },
    appleMusic: { 
      type: String,
      unique: true
    }
  },
  img: { data: Buffer, contentType: String },
  releaseYear: { type: String }
}, {
  // Options:
  timestamps: true
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;