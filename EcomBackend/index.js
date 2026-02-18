require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/allroutes.js")
const path= require("path");
const db= require("./db/database.js");
const adminRoutes = require("./routes/adminRoutes.js")
const cors =require(cors({
  origin:'https://ecomproject-weld.vercel.app/',
  credentials:true
}));

db();
app.set("views", path.join(__dirname,"view"));
app.set("view engine", "ejs");
app.use( cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname,"uploads")));
app.use("/", routes);
app.use("/", adminRoutes);

app.listen(process.env.Backend_URL,() => {
console.log("server is running on https://ecomproject-2-ugy3.onrender.com")
})