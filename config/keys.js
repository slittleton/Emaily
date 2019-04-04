// keys.js - Figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
  // we are in prodution - return the prod set of keys

  // get keys from dev.js and set them to be exported
  // so that other files can import from keys.js and get access to them
  module.exports = require('./prod');


} else {
  // we are in development - return dev keys

  // get keys from dev.js and set them to be exported
  // so that other files can import from keys.js and get access to them
  module.exports = require('./dev')


}