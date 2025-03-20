const categorieController=require("../Controllers/categorie.Controller")
const route=require("express").Router()
route.post("/add",categorieController.CreateCategorie)
route.get("/get/:id",categorieController.getCategorieById)
route.put("/update/:id",categorieController.UpdateCategorie)
route.delete("/delete/:id",categorieController.DeleteCategorie)
route.get("/get",categorieController.getCategorie)
module.exports=route