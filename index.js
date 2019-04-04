const express = require('express');
const mongoose = require('mongoose');
const keys = require ('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
// make sure to require files that need to be run in location where file 
// will be run from otherwise that file will not be executed.
require('./models/User');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');

// connect mongoose to mongoDB database
mongoose.connect(keys.mongoURI);

/* 
Most projects only use one app object(but they can use more)
the app object sets up configuration that listens for incomeing 
requests that are being routed from node to express and then route
those requests to different route handlers
*/
const app = express();

// make sure passport is aware it needs to use cookies to keep track of the
// signed in user. cookie-session library must be installed for this purpose
app.use(
  // cookieSession is a function that expects an object with two properties
  cookieSession({
    maxAge: 30*24*60*60*1000, // how long cookie can exist in browser in miliseconds (30 days)
    keys: [keys.cookieKey]  // key used to encrypt cookie
  })
)
app.use(passport.initialize());
app.use(passport.session());


authRoutes(app);

// look at underlying enviroment and check to see if it has
// a specific port it wants us to use - only works in production
// can include || that runs in development environment
// 5000 here refers to http://localhost:5000/
const PORT = process.env.PORT || 5000;

// listen to port
app.listen(PORT, () => console.log('listening')); // run from terminal with: node index.js


