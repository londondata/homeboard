
const express = require('express'),
      router = express.Router(),
      controller = require('../controllers');

 // add a route so your server will respond to GET / by serving index.html
router.get('/', function homepage (req, res) {
      res.render('homes', {home: []})
      // res.sendFile('views/index.html', { root : __dirname });
    });     

router.get('/api', controller.api.index);    
//routes for home
router.get('/api/homes',controller.homes.index);
router.get('/api/homes/:id',controller.homes.show);
router.post('/api/homes/newhome',controller.homes.create);
router.put('/api/homes/:id',controller.homes.update);
router.delete('/api/homes/:id',controller.homes.destroy);


//routes for user
// router.get('/user',controller.users.index);
// router.get('/user/:id',controller.users.show);
// router.post('/newuser',controller.users.create);
// router.put('/user/:id',controller.users.update);
// router.delete('/user/:id',controller.users.destroy);


module.exports = router;