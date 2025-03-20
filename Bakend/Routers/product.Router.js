const productController=require("../Controllers/product.Controller")
const upload=require("../middellware/upload")
const route=require("express").Router()
route.get("/get",productController.getAllProducts)
route.put("/update/:id",upload.array('image'),productController.updateproduct)
route.get("/get/:id",productController.getProductById)
route.delete("/delete/:id",productController.deleteProduct)
route.post("/add",upload.array('image'),productController.CreateProduct)
module.exports=route