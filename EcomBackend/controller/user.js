const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

exports.registerUser = async(req,res) => {
  try{
    const {userName,email,password} = req.body;
    const checkUser = await userModel.findOne({email});
    if(checkUser){
      return res.status(400).json({
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
    const user = await userModel.create(newUser);
    res.status(201).json({
      success:true,
      data:user,
      message:"user registered successfully"
    })
  }
  catch(error){
    res.status(500).json({
      success:false,
      message:"failed to create new user"+error
    })
  }
}

exports.loginUser = async(req,res) => {
  try{
    const {email,password} = req.body;

   const user= await userModel.findOne({email})
   if(!user){
  return  res.status(404).json({
    success:false,
       data:email,
       message:"email is not registered"
      })}

   const verified = await bcrypt.compare(password,user.password);
  if(!verified){
  return  res.status(401).json({
      success:false,
      message:"password is incorrect"
    })
  }

  res.status(200).json({
    success:true,
    data:user,
    meassage:"you can login successfully"
  })
  }
  catch(error){
    res.status(500).json({
      message:"failed to login"+error,
      success:false
    })
  }
}