const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    required:true,
    type:String
  }
},{timestamps:true})

module.exports = mongoose.model("user", userSchema);