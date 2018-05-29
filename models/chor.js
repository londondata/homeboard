const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      let chorSchema = new Schema({
        name: String,
        dueBy:Date ,
        by: {type: Schema.Types.ObjectId, ref: 'User'},
        isDone: Boolean
    })      
    
    
    
    let Chor = mongoose.model('Chor', chorSchema)
     module.exports = Chor;
    