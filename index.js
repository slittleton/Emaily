const express = require('express');

/* 
Most projects only use one app object(but they can use more)
the app object sets up configuration that listens for incomeing 
requests that are being routed from node to express and then route
those requests to different route handlers
*/
const app = express();

//route handler example
// other default handlers in express: get, post, put, delete, patch
app.get('/', (req, res) => { // the '/' tells express to watch for requests to this route
  res.send({hello: 'there'});
})


// look at underlying enviroment and check to see if it has
// a specific port it wants us to use - only works in production
// can include || that runs in development environment
// 5000 here refers to http://localhost:5000/
const PORT = process.env.PORT || 5000

// listen to port
app.listen(PORT); // run from terminal with: node index.js