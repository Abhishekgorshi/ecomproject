const mongoose = require("mongoose");

const adminUserSchema = new mongoose.Schema({
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

module.exports = mongoose.model("adminUser", adminUserSchema);