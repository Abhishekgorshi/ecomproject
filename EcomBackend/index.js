require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/allroutes.js")
const path= require("path");
const db= require("./db/database.js");
const adminRoutes = require("./routes/adminRoutes.js")
const cors =require("cors");

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

app.listen(8000,() => {
console.log("server is running on 8000 port")
})