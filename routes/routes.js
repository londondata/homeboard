
const express = require('express'),
      router = express.Router(),
      controller = require('../controllers');
  

// router.get('/', controller.homes.index);    
//routes for home
router.get('/api/homes',controller.homes.index);
router.get('/api/homes/:id',controller.homes.show);
router.post('/api/homes',controller.homes.create);
router.put('/api/homes/:id',controller.homes.update);
router.delete('/api/homes/:id',controller.homes.destroy);


//routes for user
// router.get('/user',controller.users.index);
// router.get('/user/:id',controller.users.show);
router.post('/api/users',controller.users.create);
// router.put('/user/:id',controller.users.update);
// router.delete('/user/:id',controller.users.destroy);


module.exports = router;