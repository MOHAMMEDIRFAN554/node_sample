const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  image:{
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('user', userSchema);
