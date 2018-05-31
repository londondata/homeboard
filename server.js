// Teri's server.js

const express =require('express'),
      app = express(),
      ejs = require('ejs')
      expressLayouts = require('express-ejs-layouts'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      path = require('path'),
      routes = require('./routes/routes'),
      port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

//set up bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//configure app

//setup routes
app.use(require('./routes/routes'))

//TODO: tell express where our static documents are
app.use(express.static(__dirname + '/public'));

 // add a route so your server will respond to GET / by serving index.html
 app.get('/', function homepage (req, res) {
    res.sendFile('/views/index.html', { root : __dirname });
  });   
//TODO: set our templating Engine/ 
// app.use(expressLayouts);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.listen(port, ()=>{
    console.log(`it works, listening on ${port}`)
})