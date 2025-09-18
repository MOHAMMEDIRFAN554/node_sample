const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true,
   
  },


});

module.exports = mongoose.model('item', userSchema);
