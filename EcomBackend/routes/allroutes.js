const express = require("express");
const router = express.Router();
const HomeController = require("../controller/home.js"); 
const UserController = require("../controller/user.js");

router.get("/", HomeController.Home );

// api routes
router.get("/api", HomeController.ApiHome );
router.get("/api/CateProducts/:CatId", HomeController.ApiCategoryProducts);
router.post("/api/purchased", HomeController.purchase);
router.post("/api/registerUser", UserController.registerUser);
router.post("/api/loginUser", UserController.loginUser);

router.get("/api/viewProduct/:product_Id", HomeController.viewProduct);


module.exports = router;