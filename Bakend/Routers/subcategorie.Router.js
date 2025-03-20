const subcategorieController=require("../Controllers/subcategorie.Controller")
const express = require('express');
const route = express.Router(); 
route.post("/add",subcategorieController.CreateSubcategorie)
route.get("/get/:id",subcategorieController.getSubcategorieById)
route.get("/get",subcategorieController.getSubcategorie)
route.delete("/delete/:id",subcategorieController.DeleteSubcategorie)
route.put("/update/:id",subcategorieController.UpdateSubcategorie)
module.exports = route;