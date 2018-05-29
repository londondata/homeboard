const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      let petSchema = new Schema({
        name: string,
        type: string,
        isFed: boolean
    })      
    
    
    
    let Pet = mongoose.model('Pet', userSchema)
     module.exports = Pet;
    