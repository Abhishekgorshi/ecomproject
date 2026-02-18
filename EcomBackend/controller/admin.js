const productModel = require("../model/productModel")
const categoryModel = require("../model/categoryModel")

exports.adminPanel = async(req,res) => {
  const products =await productModel.find();
  res.render("admin/adminPanel",{products:products});
}

exports.addProduct = async(req,res) => {
  try{
    const categories = await categoryModel.find();
    res.render("admin/addProduct",{categories:categories})
  }
  catch(error){
    res.send("fail to add product"+error)
  }
}

exports.createProduct = async(req,res) => {
  try{
    const {productName,productPrice,productQuantity,productCategory} = req.body;
    const productImage = req.file.filename;

    const newProduct = {
      productName,
      productPrice,
      productCategory,
      productQuantity,
      productImage
    }
    await productModel.create(newProduct);
    res.redirect("/adminCorner");
  }
  catch(error){
   res.send("failed to add product"+error)
  }
}

exports.allProducts = async(req,res) => {
  try{
    const allProducts = await productModel.find();
    res.render("admin/allProducts", {index:0,allProduct:allProducts})
  }
  catch(error){
   res.send("failed to show all products" +error)
  }
}

exports.allCategories = async (req,res) => {
  try{
   const allCategory = await categoryModel.find();
   res.render("admin/allCategories", {categories:allCategory})
  }
  catch(error){
   res.send("failed to load categories"+error)
  }
}

exports.addCategory = (req,res) => {
  res.render("admin/addCategory")
}

exports.createCategory = async(req,res) => {
  try{
    const {categoryName} =req.body;
    const categoryImage = req.file.filename;

    const newCategory = {categoryName,categoryImage};
    await categoryModel.create(newCategory);
    res.redirect("/categories");
  }
  catch(error){
  res.send("failed to create category due to "+error);
  }
}
exports.categoryProducts = async(req,res) => {
  try{
    const {CatId} = req.params;
 const catProducts = await productModel.find({productCategory:CatId});

   res.render("admin/cateProducts",{cateProducts:catProducts});  
}
  catch(error){
res.send("failed to load categoryProducts"+error);
  }
}