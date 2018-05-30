
const express = require('express'),
      router = express.Router(),
      homeController = require('../controllers/home');
      userController = require('../controllers/user');


//create routes
// TODO: get data
router.get('/', homeController.index);
//TODO: get home by id
router.get('/:id', homeController.show);
// TODO: create data
router.post('/newhome', homeController.create);
// TODO: update data
// router.post('/newhome', main.makeHome);
router.put('/:id', homeController.update)
// TODO: delete data
router.delete('/:id', homeController.destroy);




// TODO: User ROUTES
router.get('/user', userController.index);
//TODO: get user by id
router.get('/user/:id', userController.show);
// TODO: create user
router.post('/newuser', userController.create);
// TODO: update user
router.put('/user/:id', userController.update)
// TODO: delete user
router.delete('/user/:id', userController.destroy);


module.exports = router;