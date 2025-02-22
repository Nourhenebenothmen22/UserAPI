const mongoose=require("mongoose")
const gallerieschema=new mongoose.Schema({
    image:{
        type:String
    }
})
const productSchema=new mongoose.Schema({
    ref:{
        type:String,
        required: [true, "Product reference is required"],
        unique: true
    },
    price:{
        type:Number,
        min: [0, "Price cannot be negative"]
    },
    description:{
        type:String
    },
    galleries:[gallerieschema] ,
    qte:{
        type:Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity cannot be negative"]
    }

})
module.exports=mongoose.model("product",productSchema)