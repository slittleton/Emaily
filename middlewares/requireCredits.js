// custom made middleware to check if user is has enough credits

module.exports = (req, res, next) => { 
  if(req.user.credits < 1) {
    return res.status(403).send({error: 'Not enough credits'})
  }
  
  // next is like done, which passes the request on to the next step
  // such as to the next middleware
  next();
  
};