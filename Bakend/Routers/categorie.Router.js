const categorieController=require("../Controllers/categorie.Controller")
const upload=require("../middellware/upload")
const route=require("express").Router()
route.post("/add",upload.array('image'),categorieController.CreateCategorie)
route.get("/get/:id",categorieController.getCategorieById)
route.put("/update/:id",upload.array('image'),categorieController.UpdateCategorie)
route.delete("/delete/:id",categorieController.DeleteCategorie)
route.get("/get",categorieController.getCategorie)
module.exports=route