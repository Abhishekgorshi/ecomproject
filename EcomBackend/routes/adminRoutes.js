const express = require("express");
const route = express.Router();
const adminController = require("../controller/admin");
const adminUserApiController = require("../controller/userAdminApi");
const adminApiController = require("../controller/adminApi");
const upload = require("../multer/image");
const authMiddleware = require("../middleware/auth");

route.get("/adminCorner", adminController.adminPanel);
route.get("/addProducts", adminController.addProduct);
route.get("/allProducts", adminController.allProducts);
route.get("/categories", adminController.allCategories);
route.get("/addCategory", adminController.addCategory);
route.post("/createCategory",upload.single("categoryImage"), adminController.createCategory);
route.get("/CateProducts/:CatId", adminController.categoryProducts);

route.post("/createProduct",upload.single("productImage"), adminController.createProduct);


// adminApiRoutes

route.get("/api/adminCorner",authMiddleware, adminApiController.adminPanel);
route.get("/api/addProducts",authMiddleware, adminApiController.addProduct);
route.get("/api/allProducts",authMiddleware, adminApiController.allProducts);
route.get("/api/categories",authMiddleware, adminApiController.allCategories);
route.get("/api/viewProduct/:product_Id",authMiddleware, adminApiController.viewProduct);
route.post("/api/createCategory",upload.single("categoryImage"), authMiddleware,adminApiController.createCategory);
route.get("/api/CateProducts/:CatId",authMiddleware, adminApiController.categoryProducts);
route.post("/api/updateProduct/:productId",upload.single("productImage"), authMiddleware, adminApiController.updateProduct);
route.put("/api/updateCategory/:categoryId",upload.single("categoryImage"), authMiddleware, adminApiController.updateCategory);

route.post("/api/createProduct",upload.single("productImage"),authMiddleware, adminApiController.createProduct);
route.get("/api/deleteProduct/:productId",authMiddleware, adminApiController.deleteProduct);
route.post("/api/registerAdmin", adminUserApiController.registerUser);
route.post("/api/loginAdmin", adminUserApiController.loginUser);



module.exports = route;