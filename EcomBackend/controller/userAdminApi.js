const adminModel = require("../model/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async(req,res) => {
  try{
    const {userName,email,password} = req.body;

    const checkUser = await adminModel.findOne({email});
    if(checkUser){
      return res.status(401).json({
        success:false,
        message:"user already registered"
      })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = {
      userName,
      email,
      password:hashedPassword
    }
  
    const user = await adminModel.create(newUser);
    res.status(201).json({
      success:true,
      data:user,
      message:"admin registered successfully"
    })
  }
  catch(error){
    res.status(500).json({
      success:false,
      message:"failed to create new admin"+error
    })
  }
}

exports.loginUser = async(req,res) => {
  try{
    const {email,password} = req.body;

   const user= await adminModel.findOne({email:email})
   if(!user){
    return res.status(404).json({
      success:false,
      message:"email is not registered"      
    })
   }
   const verified = await bcrypt.compare(password,user.password);
  if(!verified){
   return res.status(401).json({
      success:false,
      message:"password is incorrect"
    })
  }
  const jwtToken = jwt.sign(
    {id:user._id,email:user.email},
    process.env.JWT_SECRET,
    { expiresIn:"1h" }
  );
  // console.log("AUTH HEADER:", req.headers.authorization);
console.log("TOKEN:", jwtToken);
// console.log("USER:", decoded);

  res.status(200).json({
    success:true,
    token:jwtToken,
    data:email,
    message:"you can login"
  })
  }
  catch(error){
    res.status(500).json({
      message:"failed to login"+error,
      success:false
    })
  }
}