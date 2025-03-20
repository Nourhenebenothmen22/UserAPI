const adminController=require("../Controllers/admin.Controller")
const route=require("express").Router()
route.post("/add",adminController.CreateAdmin)
route.get("/get/:id",adminController.getAdminById)
route.put("/update/:id",adminController.UpdateAdmin)
route.delete("/delete/:id",adminController.DeleteAdmin)
route.get("/get",adminController.getAdmin)
module.exports=route