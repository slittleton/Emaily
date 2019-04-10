// custom made middleware to check if user is logged in

module.exports = (req, res, next) => { 
  if(!req.user) {
    return res.status(401).send({error: 'You must log in'})
  }
  
  // next is like done, which passes the request on to the next step
  // such as to the next middleware
  next();
  
};