const mongoose=require("mongoose")
const userModule=require("./user.Module")
const customerSchema=new mongoose.Schema({
    picture:{
        type:String
    },
    address:{
        type:String
    },
    Cin:{
        type:Number
    },
    City:{
        type:String
    }
    

})
userModule.discriminator("customer",customerSchema)
module.exports=mongoose.model("customer")
