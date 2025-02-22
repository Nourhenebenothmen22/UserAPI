const mongoose=require("mongoose")
const factureSchema=new mongoose.Schema({
  ref: {
    type: String,
    
  },
  remise: {
    type: Number,
  
  },
  description: {
    type: String,

   
  },
  montantTotal: { // Ajout du champ montant total
    type: Number
  }

})
module.exports=mongoose.model("facture",factureSchema)
