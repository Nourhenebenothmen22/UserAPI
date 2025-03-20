const mongoose=require("mongoose")
const userModule=require("./user.Module")
const providerSchema=new mongoose.Schema({
    matricule:{
        type:String,
        required: [true, "Matricule is required"],
        unique: true // Ensure matricule is unique
    },
    campany:{
        type:String,
        required: [true, "Company name is required"]
    },
    service:{
        type:String
    }

})
userModule.discriminator("provider",providerSchema)
module.exports=mongoose.model("provider")