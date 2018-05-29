const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      let chorSchema = new Schema({
        name: string,
        dueBy:Date ,
        by: {type: Schema.Types.ObjectId, ref: 'User'},
        isDone: boolean
    })      
    
    
    
    let Chor = mongoose.model('Chor', chorSchema)
     module.exports = Chor;
    