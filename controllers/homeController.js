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
            //    console.log("found homes: ", results);
              res.json(results);
            })
            .catch((err)=>{
                console.log(err)
                res.json(err);
            })
    
    },
    //find one home with id
    show:(req, res)=>{
        console.log("SHOW HIT")
       let homeFound;
        let id = req.params.id;
        console.log("ID: ", id)
        db.Home.findById(id, (err, foundHome)=>{
            if (err) { console.log(err) }
            console.log("SUCCES: ", foundHome)
            res.json(foundHome);
        })
        .then((results)=>{
            // console.log("rendering")
        })
        .catch((err)=>{
            console.log(err)
        })
    },

    //create home
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