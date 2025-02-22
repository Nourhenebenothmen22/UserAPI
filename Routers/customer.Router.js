const customerController=require("../Controllers/customer.Controller")
const route=require("express").Router()
const upload=require("../middellware/upload")
route.post("/add",upload.single("picture"),customerController.CreateCustomer)
route.get("/get",customerController.listCustomers)
route.get("/get/:id",customerController.getCustomerById)
route.put("/update/:id",upload.single("picture"),customerController.updateCustomer)
route.delete("/delete/:id",customerController.deleteCustomer)
module.exports=route
