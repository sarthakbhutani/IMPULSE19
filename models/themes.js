var mongoose = require('mongoose');

var ThemesSchema = new mongoose.Schema({

  teamname: {
    type: String,
    unique: true,
    required: true
  },
  theme1: {
    type: String,
    required: true
  },
  theme2:{
      type: String,
      required: true
  }

});

var Themes = mongoose.model('themes', ThemesSchema);
module.exports = Themes;