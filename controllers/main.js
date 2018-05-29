const Home = require('../models/home'),
      User = require('../models/user'),
      Chor = require('../models/chors'),
      Pet = require('../models/pet'),
      Msg = require('../models/msg');

//TODO: create function to respond with date to request

module.exports = {
    //crud
    
    //find and render all home data
//     Todo.find({}).then((results)=>{
//         let todos = results.filter((todo)=>{
//             return !todo.isDone;
//         });

//         let todosDone = results.filter((todo)=>{
//             return todo.isDone;
//         })
// res.render('homeView', {todos: todos});
// })}
    showHome: (req, res) => {
        Home.find({})
            .then((results)=>{
                console.log(results)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    //find and delete home data

    //create and append home data
}