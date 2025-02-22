const providerController=require("../Controllers/provider.Controller")
const route=require("express").Router()
route.post("/add",providerController.CreateProvider)
route.get("/get/:id",providerController.getproviderById)
route.put("/update/:id",providerController.Updateprovider)
route.delete("/delete/:id",providerController.DeleteProvider)
route.get("/get",providerController.getprovider)
module.exports=route