const mongoose = require('mongoose');
const appConfig = require('../appConfig/appConfig.json');

module.exports = mongoose.connect(appConfig.dbConURL, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => { console.log("Connected to DB: " + appConfig.dbConURL);})
.catch((error) => { 
    console.log("Could not connect");
    console.log(error);
});
