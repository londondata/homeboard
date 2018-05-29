const mongoose = require('mongoose');

const Home = require('./models/home');

mongoose.connect('mongodb://localhost:27017/homeboard', {
  // useMongoClient: true
}).then(function(succ){
  console.log("database connected, look: ", succ)
}).catch((err)=>{
    console.log(`error caught while connecting to db ${err}`)
})
    save = ()=>{
        let newHome = new Home({
            name: "test Home",
            members: null,
            pets: null,
            Chors: null,
            utilities: null,
            groceries: null,
            msgWall: null,
            });

        newHome
            .save()
            .then ((result)=>{
             console.log("Result: ", result)
            }).catch((err)=>{
                console.log(err)
            });

    }


    save();


