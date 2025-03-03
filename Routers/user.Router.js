const userController=require("../Controllers/user.Controller")
const route=require("express").Router()
route.get("/verify/:code",userController.verifyCode)
module.exports=route