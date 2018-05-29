const Home = require('./models/home');
const mongoose = require('mongoose');

let home = new Home({
    _id: new mongoose.Types.ObjectId(),
    name: "test Home",
    members: null,
    pets: null,
    Chors: null,
    utilities: null,
    groceries: null,
    msgWall: null,
})


  home.save()
      .then((succ)=>{
          console.log(`it works: look ${succ} 🙅🏾‍♂️`)
        // let user = new User({
        //     _id: new mongoose.Types.ObjectId(),
        //     name: "user one",
        //     work: [{where: "GA", workhours: "M-F 8-5"}],
        //     Chors: null,
        //     isHome: false
        // })
      })
      .catch((err)=>{
          console.log(err)
      })

