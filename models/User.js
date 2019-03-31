const mongoose = require('mongoose');
const { Schema } = mongoose;

// set up list properties and types you will use with mongoose on a collection 
const userSchema = new Schema({
  googleId: String
});

// tell mongoose to create a new collection called users
mongoose.model('users', userSchema);