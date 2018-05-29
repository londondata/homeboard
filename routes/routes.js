
const express = require('express'),
      router = express.Router(),
      main = require('../controllers/main');


//setup mongo connection
mongoose.connect('mongodb://localhost:27017/homeBoard', {
  // useMongoClient: true
}).then(function(){
  console.log('database connected')
}).catch((err)=>{
    console.log(`error caught while connecting to db ${err}`)
})
module.exports = router;

//create routes
router.get('/', main.showHome);

