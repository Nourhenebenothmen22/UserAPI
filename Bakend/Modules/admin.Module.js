const mongoose=require("mongoose")
const userModule = require("./user.Module")
const adminSchema=new mongoose.Schema({

})
userModule.discriminator("admin",adminSchema)
module.exports=mongoose.model("admin")
