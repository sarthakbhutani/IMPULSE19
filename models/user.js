var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  email1: {
    type: String,
    required: true,
    trim: true
  },
  name1: {
    type: String,
    // unique: true,
    required: true,
    trim: true
  },
  mobile1:{
    type: String,
    required: true
},

name2: {
  type: String,
  // unique: true,
  required: false,
  trim: true
},
mobile2:{
  type: String,
  required: false
},
email2:{
type:String,
required: false
},

name3: {
  type: String,
  // unique: true,
  required: false,
  trim: true
},
mobile3:{
  type: String,
  required: false
},
email3:{
  type:String,
  required: false
  },

name4: {
  type: String,
  // unique: true,
  required: false,
  trim: true
},
mobile4:{
  type: String,
  required: false
},
email4:{
  type:String,
  required: false
  },
 
 
  college:{
      type: String,
      required:true
  },
  github:{
      type:String,
      required:true
  
  },
  teamname:{
    type:String,
    required: true,
    unique: true
  }


});

var User = mongoose.model('maithacks', UserSchema);
module.exports = User;

