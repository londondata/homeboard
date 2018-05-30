
const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/index');


//routes for home
router.get('/',controller.homes.index);
router.get('/:id',controller.homes.show);
router.post('/newhome',controller.homes.create);
router.put('/:id',controller.homes.update)
router.delete('/:id',controller.homes.destroy);


//routes for user
router.get('/user',controller.users.index);
router.get('/user/:id',controller.users.show);
router.post('/newuser',controller.users.create);
router.put('/user/:id',controller.users.update);
router.delete('/user/:id',controller.users.destroy);


module.exports = router;