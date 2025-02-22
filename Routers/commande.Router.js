const commandeController=require("../Controllers/commande.Controller")
const route=require("express").Router()
route.post("/add",commandeController.Create)
route.get("/get/:id",commandeController.getCommandeById)
route.put("/update/:id",commandeController.UpdateCommande)
route.delete("/delete/:id",commandeController.DeleteCommande)
route.get("/get",commandeController.getCommande)
module.exports=route