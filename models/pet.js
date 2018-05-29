const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      let petSchema = new Schema({
        name: String,
        type: String,
        isFed: Boolean
    })      
    
    
    
    let Pet = mongoose.model('Pet', petSchema)
     module.exports = Pet;
    