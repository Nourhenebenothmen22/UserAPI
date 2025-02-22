const factureController=require("../Controllers/facture.Controller")
const validateAttribut=require("../middellware/validate")
const route=require("express").Router()
route.post("/add",validateAttribut(["description","remise","montantTotal","ref"]),factureController.CreateFacture)
route.put("/update/:id",factureController.Updatefacture)
route.get("/get/:id",factureController.getFactureById)
route.get("/get",factureController.getfacture)
route.delete("/delete/:id",factureController.DeleteFacture)
module.exports=route