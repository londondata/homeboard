const express = require('express'),
      router = express.Router(), 
      db = require('../models/'),
      app = express(); 


module.exports = {

    //create destroy update show index
     // TODO: create user
     create: (req, res) => {
        console.log(req.body)
        let newUser = new db.User({
            name: `${req.body.name}`,
            work: {work:`${req.body.where}`, workhours:`${req.body.workhours}`},
            chors: null,
            isHome: true,
            homeid: {type:`${req.body.homeid}`, ref: 'home'}
            });
            console.log("NEW USER: ", newUser)
        newUser.save()
                .then ((result)=>{
                console.log("SUCCESS NEW USER: ", result)
            }).catch((err)=>{
                console.log("ERR: ", err)
            });
            
    },
    
    //show users
    index: (req, res) => {
        db.User.find({})
            .then((results)=>{
                console.log("users", results)
            })
            .catch((err)=>{
                console.log(err)
            })
    
    },

    //find one user with id
    show:(req, res)=>{
        // console.log("finding user")
        let id = req.params.id;
        db.User.findById(id, (err, foundUser)=>{
            if (err) { console.log(err) }
            // console.log(`found ${foundUser}`)
        })
    },

    //update or modify user
    update: (req, res) => {
        let id = req.params.id
        let data = req.body
        let newUser = createUser(data);
        db.User.findByIdAndUpdate(id, function(err, updatedUser){
        if (err) { console.log(err) }
        //   console.log(`updateduser`, updateUser)
        res.redirect(`/${id}`)
        })
    },

    // DELETE home by Id
        destroy:(req, res) => {
            // find one home by id, delete it, and send it back as JSON
            let id = req.params.id
            db.User.findByIdAndRemove(id, (err, destroyed) => {
            if (err) { console.log(err) }
            // console.log(`deleted home`)
            res.json(destroyed)
            }).then ((result)=>{
                // console.log("SUCCESS DELETED HOME: ", result)
            }).catch((err)=>{
                console.log("ERR: ", err)
            });
        }  

}