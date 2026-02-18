const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
  const jwtToken = req.headers.authorization?.split(" ")[1];
if(!jwtToken){
  return res.status(401).json({
    message:"no token provided",
    success:false
  });
}
try{
  const decode = jwt.verify(jwtToken, process.env.JWT_SECRET);
  req.user = decode;
  next();
}
catch(error){
return res.status(401).json({
  success:false,
  message:"invalid token"+error
})

}
}

module.exports = authMiddleware;