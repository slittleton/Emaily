const mongoose = require('mongoose');
const { Schema } = mongoose;

// set up list properties and types you will use with mongoose on a collection 
const userSchema = new Schema({
  googleId: String,
  credits: {type: Number, default: 0} //you can assign object to specify other config options besides just type
                                      // check mongoose.js documentation for other config options
});

// tell mongoose to create a new collection called users
mongoose.model('users', userSchema);