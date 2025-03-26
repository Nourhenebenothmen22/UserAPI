const userController=require("../Controllers/user.Controller")
const authMiddleware = require("../middellware/AuthentificationToken");
const route=require("express").Router()
route.get("/verify/:code",userController.verifyCode)
route.post("/login",userController.login)
route.post("/forget",userController.ForgetPassword)
route.post("/reset/:token",userController.ResetPassword)
route.post("/logout",userController.Logout)
module.exports=route