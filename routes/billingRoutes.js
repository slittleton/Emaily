const keys = require('../config/keys')

const stripe = require('stripe')(
  keys.stripeSecretKey
);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

  
  app.post('/api/stripe', requireLogin, async (req, res) => {
            // requireLogin - middleware that checks if user is logged in before  
            // attempting to charge, you can pass more middlewares as additional
            // arguments if you need to
   const charge = await stripe.charges.create({
      amount: 500, //amount in cents
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    })
    
    req.user.credits += 5; // add credits to user 
    const user = await req.user.save(); //persist changes to database

    //respond to request
    res.send(user);
  });
};