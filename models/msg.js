const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

      let msgSchema = new Schema({
        title: string,
        msg: string,
        response: [{res: string, by: {type: Schema.Types.ObjectId, ref:'User'}}],
        urgent: boolean
    })      
    
    let Msg = mongoose.model('Msg', msgSchema)
     module.exports = Msg;
    