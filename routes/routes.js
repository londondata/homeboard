
const express = require('express'),
      router = express.Router(),
      main = require('../controllers/main');


//create routes
// TODO: get data
router.get('/', main.showHome);
//TODO: get Data
// router.get('/', main.showHome);
// TODO: create data
router.get('/create-home', main.makeHome);

// TODO: update data

// TODO: delete data
module.exports = router;