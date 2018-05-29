const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      let userSchema = new Schema({
        name: string,
        work: [{where: string, workhours: string}],
        Chors: [{type: Schema.Types.ObjectId, ref: 'Chor'}],
        isHome: boolean
    })      
    
    
    
    let User = mongoose.model('User', userSchema)
     module.exports = User;
    