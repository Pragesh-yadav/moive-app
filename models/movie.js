
    // grab the things we need
const mongoose = require('mongoose')

// create a schema

const movieSchema = new mongoose.Schema({
    
      movie_id: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100,
        minlength: 1

      },
      name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

      
      },
      img: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

      
      },
      summary: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
      }
})
module.exports = mongoose.model('movie', movieSchema)
