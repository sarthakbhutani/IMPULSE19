var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');

var User3Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    // unique: true,
    required: true,
    trim: true
  },
  mobile:{
      type: String,
      required: true
  },
  college:{
      type: String,
      required:true
  },
  github:{
      type:String,
      required:true
  
  }

});

var User3 = mongoose.model('workshop', User3Schema);
module.exports = User3;
