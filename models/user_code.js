var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');

var User4Schema = new mongoose.Schema({
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

var User4 = mongoose.model('code bonanza', User4Schema);
module.exports = User4;
