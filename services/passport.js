const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use( // takes two arguments, object with client info and callbackURL, accesstoken
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
  (accessToken, refreshToken, profile, done) => { // this function is the callback 
    //that handles the info delivered by google to our server 

    // check if user is already in database
    User.findOne({ googleId: profile.id })
    .then((existingUser)=>{
      if(existingUser) {
        // user record already exists in database
        done(null, existingUser);
        // done() is a built in function for passport that tells passport user 
        // creation/verification complete. takes error obj and a user record
      } else {
        // user record does not exists, create a new record
        
        // create a new Model Instance object in the Model Class Users so 
        // it is available to save it to the database. the .save() function 
        // persists the Model Instance to the database
        new User({ googleId: profile.id }) //create model instance
          .save()                          //save model instance
          .then(user=> done(null, user))//recieve promise back from database
          //containing model instance (to verify that user was created)
      }
    })
  })
);

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: '/auth/google/callback',
//       proxy: true
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ googleId: profile.id });

//       if (existingUser) {
//         return done(null, existingUser);
//       }

//       const user = await new User({ googleId: profile.id }).save();
//       done(null, user);
//     }
//   )
// );
