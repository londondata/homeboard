const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      let msgSchema = new Schema({
        title: String,
        msg: String,
        response: [{res: String, by: {type: Schema.Types.ObjectId, ref:'User'}}],
        urgent: Boolean
    })      
    
    let Msg = mongoose.model('Msg', msgSchema)
     module.exports = Msg;
    