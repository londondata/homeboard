const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      let userSchema = new Schema({
        name: String,
        work: [{where: String, workhours: String}],
        chors: [{type: Schema.Types.ObjectId, ref: 'Chor'}],
        isHome: Boolean
    })      
    
    
    
    let User = mongoose.model('User', userSchema)
     module.exports = User;
    