const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const baseOptions = {
    discriminatorKey: 'itemtype', // our discriminator key, could be anything
    collection: 'items', // the name of our collection
  };
const userSchema=new mongoose.Schema({
    Fullname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    Phone:{
        type:Number
    }

},
baseOptions)
userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})
module.exports=mongoose.model("user",userSchema)