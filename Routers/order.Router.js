const orderController=require("../Controllers/order.Controller")
const route=require("express").Router()
route.post("/add",orderController.CreateOrder)
route.put("/update/:id",orderController.UpdateOrder)
route.delete("/delete/:id",orderController.DeleteOrder)
route.get("/get",orderController.getOrder)
route.get("/get/:id",orderController.getOrderById)
module.exports=route
