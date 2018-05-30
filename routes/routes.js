
const express = require('express'),
      router = express.Router(),
      main = require('../controllers/main');


//create routes
// TODO: get data
router.get('/', main.showHome);
//TODO: get home by id
router.get('/:id', main.getHome);
// TODO: create data
router.post('/newhome', main.makeHome);
// TODO: update data
// router.post('/newhome', main.makeHome);

// TODO: delete data
router.post('/:id', main.destroyHome);
module.exports = router;