const express = require('express'),
      router = express.Router(), 
      db = require('../models/') 
//TODO: create function to respond with date to request

module.exports = {
    //crud
    
    showHome: (req, res) => {
        db.Home.find({})
            .then((results)=>{
               let home = results
                res.render('home', {home: home});
            })
            .catch((err)=>{
                console.log(err)
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
    }
}