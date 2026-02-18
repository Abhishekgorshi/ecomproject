const db = require("../db/database");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type : String,
    require:true,
  },
  productCategory:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"categories",
  required:true
  },
  productPrice: {
    type :String
  },
  productImage: {
    type:String
  },
  productDescription:{
    type:String,
    require:true
  },
productQuantity: {
  type:Number,
  required:true
}},
  { timestamps:true }
)

module.exports = mongoose.model("product", productSchema);