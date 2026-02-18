const productModel = require("../model/productModel.js");
const categoryModel = require("../model/categoryModel.js");

exports.ApiHome = async(req,res) => {
try{
 const  products = await productModel.find();
 const category = await categoryModel.find();
  res.status(200).json({
    success:true,
    meassage:"products received on frontend",
    data:{products:products,category:category}
  });
}
catch(error){
  res.status(500).json({
    success:false,
    message:"data sending failed"+error,
  })
}
}
exports.Home = async(req,res) => {
try{
 const  products = await productModel.find();
 const category = await categoryModel.find();
  res.render("home",{products:products,category:category});
}
 catch(error){ 
  res.send("failed to load home "+error)
}}
exports.ApiCategoryProducts = async(req,res) => {
  try{
    const {CatId} = req.params;
   const CatProducts = await productModel.find({productCategory:CatId});
   
   res.status(200).json({
    success:true,
    message:"these are all products of category",
    data : CatProducts
   })
  }
  catch(error){
    res.status(500).json({
      success:false,
      message:"failed to catch category products"+error
    
    })
  }
}

exports.purchase = async(req,res) => {
  try{
const {Items} = req.body;
for(let i=0; i<Items.length; i++){

  const product = await productModel.findOne({_id:Items[i].productId})

  await productModel.findByIdAndUpdate(Items[i].productId,{
    productQuantity:product.productQuantity-Items[i].purchaseQuantity
  });
}

  res.status(200).json({
    success:true,
    message:"purchased successfully"
  })
  }
  catch(error){
    res.status(500).json({
      success:false,
      message:"failed to update quantity"+error
    })
  }
}


exports.viewProduct = async(req,res) => {
  try{
    const {product_Id} = req.params;
    const product = await productModel.findById(product_Id);
    res.status(200).json({
      success:true,
      message:"this is product fetched",
      data:product
    })
    console.log(product_Id)
    console.log(product)
  }
  catch(error){
res.status(500).json({
  success:false,
  message:"failed to access product Description"
})
  }
}