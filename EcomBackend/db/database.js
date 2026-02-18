const mongoose = require("mongoose");
const db = async () => 
  { 
try{
await mongoose.connect(process.env.connectionString)
console.log("database connected");
}
catch(err){
console.log("failed to connect "+err);
}
};

module.exports = db;