const passport = require('passport');


// export function containing route handlerers so it can be used where the 
// file gets run
module.exports = (app) => {
  // Route Handler
  // oauth flow managed by passport
  // 'google' was given to us by stuff done in the background with passportjs, 
  // thats why you never see it declared as and related back to new GoogleStrategy
  // passportjs sees 'google' and automatically associates that with new GoogleStrategy 
  // internally
  // the second argument is an options object. scope specifys the type of access we want
  // in this case we want access to the users profile and their email (other scopes listed in documentation)
  app.get(
    '/auth/google',
    passport.authenticate("google", {
      scope: ["profile","email"] 
    })
  );

  // Route Handler
  // visiting localhost:5000/auth/google will get profile from google and
  // redirect to localhost:5000/auth/google/callback
  // additonally there will be extra info in the returned url
  // localhost:5000/auth/google/callback?code=bunch of random looking stuff
  // this returned code is  turned into a profile by passportjs
  app.get('/auth/google/callback', passport.authenticate('google'))
}




