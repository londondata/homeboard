const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

    let utilitySchema = new Schema({
        name: string,
        company: string,
        cost: number,
        isPaid: boolean,
        responsible: {type: Schema.Types.ObjectId, ref: 'User'}
    })  
    // let chorSchema = new Schema({
    //     name: string,
    //     due: Date,
    //     isDone: boolean,
    //     responsible: {type: Schema.Types.ObjectId, ref: 'User'}
    // })      

    let grocerySchema = new Schema({
        name: string,
        isOut: boolean,
        pickedUp: {when: Date, by:{type: Schema.Types.ObjectId, ref: 'User'} }
    })      

let homeSchema = new Schema({
    name: string,
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    pets: [{type: Schema.Types.ObjectId, ref: 'Pet'}],
    Chors: [{type: Schema.Types.ObjectId, ref: 'Chor'}],
    utilities: [utilitySchema],
    groceries: [grocerySchema],
    msgWall: [{type: Schema.Types.ObjectId, ref: 'Msg'}],
})      



let Home = mongoose.model('Home', homeSchema)
 module.exports = Home;
