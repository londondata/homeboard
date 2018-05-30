const express = require('express'),
      router = express.Router(), 
      db = require('../models/'),
      app = express(); 


module.exports = {
     // TODO: create user
     createUser: (data)=>{
        let newUser = new db.User({
            name: `${data.name}`,
            work: data.work,
            chors: null,
            isHome: true,
            });
            // console.log("NEW HOME: ", newHome)
        newUser.save()
                .then ((result)=>{
                console.log("SUCCESS NEW USER: ", result)
                app.use(reload(path))
            }).catch((err)=>{
                console.log("ERR: ", err)
                app.use(reload(path))
            });
            
    },


    // TODO: delete user
    //crud
    //TODO: show users
    showUser: (req, res) => {
        db.User.find({})
            .then((results)=>{
                console.log("users", results)
            })
            .catch((err)=>{
                console.log(err)
            })
    
    },
    // TODO: find one user with id
    getUser:(req, res)=>{
        // console.log("finding user")
        let id = req.params.id;
        db.User.findById(id, (err, foundUser)=>{
            if (err) { console.log(err) }
            // console.log(`found ${foundUser}`)
        })
    },

//TODO: update or modify user
 updateHome: (req, res) => {
    // find one user by id, update it based on request body,
    let id = req.params.id
    let data = req.body
    // let newUser = createUser(data);
    // console.log(createUser(data))
    // console.log("parasm: ", data)
    // db.User.findByIdAndUpdate(id, {"$set": createUser(data)},  { new: true }, function(err, updatedHome){
    //   if (err) { console.log(err) }
    // //   console.log(`updatedHome`)
    //   res.redirect(`/${id}`)
    // })
  },

// DELETE home by Id
    destroyUser:(req, res) => {
        // find one home by id, delete it, and send it back as JSON
        let id = req.params.id
        db.User.findByIdAndRemove(id, (err, destroyed) => {
        if (err) { console.log(err) }
        // console.log(`deleted home`)
        res.json(destroyed)
        // res.redirect('/')
        }).then ((result)=>{
            // console.log("SUCCESS DELETED HOME: ", result)
            // res.redirect('/')
        }).catch((err)=>{
            console.log("ERR: ", err)
            // res.redirect('/')
        });
    },

    

    

}