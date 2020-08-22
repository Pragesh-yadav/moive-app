const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')
module.exports = router;

router.get('/getmovielist', async(req, res)=> {
  console.log("get api called",req)
  var movie;
  movie = await Movie.find({}).select({ "__v":0, "_id": 0,"movie_id":0});
    if (movie.length == 0) {
      return res.status(404).json({ message: `Can't find moive` })
    }
  console.log('call reached here',movie) 
  delete movie.__v
  delete movie._id;                            
   return res.status(200).json(movie)
});

router.post('/addNewMovie', async (req, res)=> {
    const movie = new Movie({                              
      movie_id:generate_id('movie'),
      name: req.body.name,
      img: req.body.img,
      summary: req.body.summary
    }, { versionKey: false });
    console.log("before save",movie)
    const newMovie =  await movie.save();
    console.log("data saved"+newMovie)
    delete newMovie._id
    //return newly added record
    return res.status(201).json(newMovie);
})



function generate_id(id_type) {

  var ssid;
  if (id_type == "movie") {                      //return moive id
    ssid = "MV" + new Date().valueOf()
  }
  return ssid;
}
module.exports = router;