const mongoose=require("mongoose")
const gallerieschema=new mongoose.Schema({
    image:{
        type:String
    }
})

const categorieSchema=new mongoose.Schema({
    
    name:{
        type:String
    },
    description:{
        type:String
    },
    galleries:[gallerieschema] 
})
module.exports=mongoose.model("categorie",categorieSchema)