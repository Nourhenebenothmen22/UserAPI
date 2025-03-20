const mongoose=require("mongoose")
const OrderSchema=new mongoose.Schema({
    qte:{
        type:Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"]
        
    },
    price:{
        type:Number,
        required: [true, "Price is required"], // Required field
        min: [0, "Price cannot be negative"]
    }

})
module.exports=mongoose.model("Order",OrderSchema)