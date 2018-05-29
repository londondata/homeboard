const express =require('express'),
      app = express(),
      ejs = require('ejs')
      expressLayouts = require('express-ejs-layouts'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes = require('./routes/routes'),
      port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;


//configure app

//TODO: tell express where our static documents are
app.use(express.static(__dirname + '/public'));

//TODO: set our templating Engine/ 
app.set('view engine', 'ejs');
app.use(expressLayouts);
 
//set up bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//setup routes
app.use(require('./routes/routes'))


app.listen(port, ()=>{
    console.log(`it works, listening on ${port}`)
})