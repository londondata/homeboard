const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

    let utilitySchema = new Schema({
        name: String,
        company: String,
        cost: Number,
        isPaid: Boolean,
        responsible: {type: Schema.Types.ObjectId, ref: 'User'}
    })     

    let grocerySchema = new Schema({
        name: String,
        isOut: Boolean,
        pickedUp: {when: Date, by:{type: Schema.Types.ObjectId, ref: 'User'} }
    })      

let homeSchema = new Schema({
    name: String,
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    pets: [{type: Schema.Types.ObjectId, ref: 'Pet'}],
    Chors: [{type: Schema.Types.ObjectId, ref: 'Chor'}],
    utilities: [utilitySchema],
    groceries: [grocerySchema],
    msgWall: [{type: Schema.Types.ObjectId, ref: 'Msg'}],
})      



let Home = mongoose.model('Home', homeSchema)
 module.exports = Home;
