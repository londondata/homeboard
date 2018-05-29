const express = require('express'),
      router = express.Router(),  
      Home = require('../models/home'),
      User = require('../models/user'),
      Chor = require('../models/chors'),
      Pet = require('../models/pet'),
      Msg = require('../models/msg');
//TODO: create function to respond with date to request

module.exports = {
    //crud
    
    showHome: (req, res) => {
        Home.find({})
            .then((results)=>{
                console.log(results)
                res.render('home', {todos: results});
            })
            .catch((err)=>{
                console.log(err)
            })
    
    },


    //find and delete home data

    //create and append home data
    makeHome: (req, res)=>{
        console.log("MAKE HOME CALLED")
        router.post('/newhome', (req, res)=>{
            let newHome = new Home({
                name: "test Home",
                members: null,
                pets: null,
                Chors: null,
                utilities: null,
                groceries: null,
                msgWall: null,
                });
                console.log("NEW HOME: ", newHome)
            newHome.save()
                    .then ((result)=>{
                    console.log(result);
                    console.log("SUCCESS HOME: ", result)
                    res.redirect('/')
                }).catch((err)=>{
                    console.log("ERR: ", err)
                    res.redirect('/')
                });
        });
    }
}