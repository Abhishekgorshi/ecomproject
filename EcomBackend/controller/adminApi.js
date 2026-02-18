const productModel = require("../model/productModel");
const categoryModel = require("../model/categoryModel");

exports.adminPanel = async(req,res) => {
  try{
  const products =await productModel.find();
  res.status(200).json({
    success:true,
    meassage:"adminPanel data sent successfully",
    data:products
  });
  
}
catch(err){
  res.status(500).json({
    status:false,
    message:"failed to send panel data"
  })
}
}

exports.addProduct = async(req,res) => {
  try{
    const categories = await categoryModel.find();
    res.status(200).json({
      success:true,
      message:"categories are sent for add product",
      data:categories})
  }
  catch(error){
    res.status(500).json({
    success:false,
      message:"fail to add product"+error
  })
}}

exports.createProduct = async(req,res) => {
  try{
    const {productName,productPrice,productQuantity,productCategory,productDescription} = req.body;
    const productImage = req.file.filename;

    const newProduct = {
      productName,
      productPrice,
      productCategory,
      productQuantity,
      productImage,
      productDescription
    };
const productAvailable = await productModel.findOne({productName:productName});
   

if(productAvailable){
 const updated = await productModel.findOneAndUpdate({productName:productAvailable.productName},{
    productQuantity: Number(productAvailable.productQuantity) + Number(productQuantity)
  })
  
}else{
  await productModel.create(newProduct);
  res.status(201).json({
    success:true,
    message:"product added successfully"
  })
}
}
  catch(error){
   res.status(500).json({
    success:false,
    message:"failed to add product"+error
    })
}}

exports.allProducts = async(req,res) => {
  try{
    const allProducts = await productModel.find();
    res.status(200).json({
      success:true,
      message:"all products are sent",
      data:{index:0,allProduct:allProducts}
  })
}
  catch(error){
   res.status(500).json({
    success:false,
    message:"failed to show all products" +error
   })
}}

exports.allCategories = async (req,res) => {
  try{
   const allCategory = await categoryModel.find();
   res.status(200).json({
   success:true,
    message:"these are all categories",
    data:{categories:allCategory}
  })
  }
  catch(error){
    res.status(500).json({
   success:false,
      message:"failed to load categories"+error,
  })
  }
}


exports.createCategory = async(req,res) => {
  try{
    const {categoryName} =req.body;
    const categoryImage = req.file.filename;

    const newCategory = {categoryName,categoryImage};
    const alreadyExist = await categoryModel.findOne({categoryName:newCategory.categoryName});

    if(alreadyExist){
    res.status(409).json({
      success:false,
      message:"category already exist"
    });
      
    }
    else{
    await categoryModel.create(newCategory);
    res.status(201).json({
      success:true,
      message:"new category added"
    });
    console.log(newCategory)
  }}
  catch(error){
  res.status(500).json({
    success:false,
    message:"failed to create category due to "+error
  })
  }
}
exports.categoryProducts = async(req,res) => {
  try{
    const {CatId} = req.params;
 const catProducts = await productModel.find({productCategory:CatId});

   res.stauts(200).json({
    success:true,
    message:"these are ctegory products",
    data:catProducts
  })  
}
  catch(error){
res.status(500).json({
  success:false,
  message:"failed to load category"+error
  })
}}

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

exports.deleteProduct = async(req,res) => {
  try{
    const {productId} = req.params;
    await productModel.findByIdAndDelete(productId)
    res.status(200).json({
      success:true,
      message:"product deleted successfully"
    })

  }
  catch(error){
    res.status(500).json({
      success:false,
      message:"failed to delte product"+error
    })
  }
}

exports.updateProduct =async(req,res) => {
  try{
    const {productId} =req.params;
    console.log(productId)
    const {productName,productPrice,productCategory,productDescription} = req.body;
    const updatedData = {productName,productPrice,productCategory,productDescription};
    if(req.file){
      updatedData.productImage=req.file.filename;
    }
    console.log(updatedData)
await productModel.findByIdAndUpdate(productId,updatedData)
res.status(200).json({
  success:true,
  message:"edited success fully"
})
  }
  catch(error){
    res.status(500).json({
      message:"faileed to update data",
      success:false
    })
  }
}


exports.updateCategory =async(req,res) => {
  try{
    const {categoryId} =req.params;
    console.log(categoryId)
    const {categoryName} = req.body;
    
    const updatedData = {categoryName};
    if(req.file){
      updatedData.categoryImage= req.file.filename;
    };
    console.log(updatedData)
await categoryModel.findByIdAndUpdate(categoryId,updatedData)
res.status(200).json({
  success:true,
  message:"edited success fully"
})
  }
  catch(error){
    res.status(500).json({
      message:"faileed to update data",
      success:false
    })
  }
}