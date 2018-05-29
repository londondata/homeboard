
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/homeboard', {
  // useMongoClient: true
}).then(function(succ){
  console.log("database connected, look: ", succ)
}).catch((err)=>{
    console.log(`error caught while connecting to db ${err}`)
})

module.exports = {
  Home: require('./home.js'),
  User: require('./user.js'),
  Chor: require('./chor.js'),
  Msg: require('./msg.js'),
  Pet: require('./pet.js'),
}
