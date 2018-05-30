const express = require('express'),
      router = express.Router(), 
      db = require('../models/'),
      app = express(); 

//TODO: create function to respond with date to request
module.exports = {

    //TODO: show all the homes
    index: (req, res) => {
        db.Home.find({})
            .then((results)=>{
                // console.log("rendering")
               let home = results
                res.render('homes', {home: home});
            })
            .catch((err)=>{
                console.log(err)
            })
    
    },
    // TODO: find one home with id
    show:(req, res)=>{
       let homeFound, usersFound;
        let id = req.params.id;
        db.Home.findById(id, (err, foundHome)=>{
            if (err) { console.log(err) }
            // console.log(`found ${foundHome}`)
             homeFound = foundHome;
             usersFound = db.User.findById(id,(err, foundUsers)=>{
                if(err){console.log(err)}
            });
        })
        .then((results)=>{
            // console.log("rendering")
            res.render('home', {home: homeFound, users: usersFound})
        })
        .catch((err)=>{
            console.log(err)
        })
    },

    //TODO: create home
    create: (req, res)=>{
        // console.log("MAKE HOME CALLED", req.body)
            let newHome = new db.Home({
                name: `${req.body.name}`,
                members: null,
                pets: null,
                Chors: null,
                utilities: null,
                groceries: null,
                msgWall: null,
                });
                // console.log("NEW HOME: ", newHome)
            newHome.save()
                    .then ((result)=>{
                    // console.log("SUCCESS HOME: ", result)
                    res.redirect('/')
                }).catch((err)=>{
                    console.log("ERR: ", err)
                    res.redirect('/')
                });
    },
            
    //TODO: update or modify home
    update: (req, res) => {
        let id = req.params.id
        let data = req.body
        // console.log("parasm: ", data)
        // db.Home.findByIdAndUpdate(id, {"$set": createUser(data)},  { new: true }, function(err, updatedHome){
        //   if (err) { console.log(err) }
        // //   console.log(`updatedHome`)
        //   res.redirect(`/${id}`)
        // })
    },

    //TODO: DELETE home by Id
    destroy:(req, res) => {
        let id = req.params.id
        db.Home.findByIdAndRemove(id, (err, destroyed) => {
        if (err) { console.log(err) }
        // console.log(`deleted home`, destroyed)
        res.json(destroyed)
        }).then ((result)=>{
            // console.log("SUCCESS DELETED HOME: ", result)
        }).catch((err)=>{
            console.log("ERR WHILE DESTORYING: ", err)
        });
    },    
}