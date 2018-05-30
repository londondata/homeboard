const express = require('express'),
      router = express.Router(), 
      db = require('../models/') 
//TODO: create function to respond with date to request

module.exports = {
    //crud
    
    showHome: (req, res) => {
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
    getHome:(req, res)=>{
        console.log("finding home")
        let id = req.params.id;
        db.Home.findById(id, (err, foundHome)=>{
            if (err) { console.log(err) }
            // console.log(`found ${foundHome}`)
            res.render('home', {home: foundHome})
        })
    },

    //find and delete home data

    //create and append home data
    makeHome: (req, res)=>{
        console.log("MAKE HOME CALLED")
        console.log("MAKE HOME CALLED", req.body)
            let newHome = new db.Home({
                name: `${req.body.name}`,
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
                    // console.log("SUCCESS HOME: ", result)
                    res.redirect('/')
                }).catch((err)=>{
                    console.log("ERR: ", err)
                    res.redirect('/')
                });
    },


// DELETE by Id
    destroyHome:(req, res) => {
        // find one home by id, delete it, and send it back as JSON
        let id = req.params.id
        db.Home.findByIdAndRemove(id, (err, destroyed) => {
        if (err) { console.log(err) }
        console.log(`deleted home`)
        // res.json(destroyed)
        res.redirect('/')
        })
    }
    

}