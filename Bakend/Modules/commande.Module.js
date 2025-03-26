const mongoose=require("mongoose")
const commandeSchema=new mongoose.Schema({
    date: {
        type: Date,
        required: true, // La date de la commande est obligatoire
        default: Date.now // La date par défaut est la date actuelle
      },
      etat: {
        type: String,
        enum: ['En attente', 'En cours de traitement', 'Expédiée', 'Livrée', 'Annulée'], // Choix d'états prédéfinis
        default: 'En attente' // L'état par défaut est "En attente"
      },
      lieuLivraison: {
        type: String,
        required: true // Le lieu de livraison est obligatoire
      },
      typeLivraison: {
        type: String,
        enum: ['Domicile', 'Point relais'], // Choix de types de livraison prédéfinis
        required: true // Le type de livraison est obligatoire
      },
      deliveryPrice: {
        type: Number,
        required: true, // Le prix de livraison est obligatoire
        min: 0 // Le prix de livraison ne peut pas être négatif
      }
})
module.exports=mongoose.model("commande",commandeSchema)