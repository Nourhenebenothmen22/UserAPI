const commandeModule=require("../Modules/commande.Module")
module.exports={
     Create: async (req, res) => {
            try {
                const commande = new commandeModule(req.body); // Correct: use 'new'
                await commande.save(); // Correct: save 'facture'
    
                res.status(200).json({
                    success: true,
                    message: "Commande is created", // Corrected spelling
                    data:commande
                });
    
            } catch (error) {
                console.error("Error creating commande:", error); // Log the error
                res.status(400).json({
                    success: false,
                    message: "Commande is not created. " + error.message, // Corrected spelling and include error message
                    data: null
                });
            }
        },
        getCommandeById: async (req, res) => {
                const id = req.params.id;
                try {
                    const getComm = await commandeModule.findById(id);
                    res.status(200).json({
                        success: true,
                        message: "Commande is listed",
                        data: getComm // Correct key: 'data'
                    });
        
                } catch (error) {
                    res.status(400).json({
                        success: false,
                        message: "Commande cannot be listed. " + error.message, // Include error message
                        data: null
                    });
                }
            },
             UpdateCommande: async (req, res) => {
                    const id = req.params.id;
                    try {
                        const commUpdate = await commandeModule.findByIdAndUpdate(id, req.body, { new: true });
                        res.status(200).json({
                            success: true,
                            message: "Commande is updated",
                            data: commUpdate// Correct key: 'data'
                        });
            
                    } catch (error) {
                        res.status(400).json({
                            success: false,
                            message: "Commande is not updated. " + error.message, // Include error message
                            data: null
                        });
                    }
                },
                 DeleteCommande: async (req, res) => {
                        const id = req.params.id;
                        try {
                            const deleteComm = await commandeModule.findByIdAndDelete(id);
                            res.status(200).json({
                                success: true,
                                message: "Commande is deleted",
                                data: deleteComm // Correct key: 'data'
                            });
                
                        } catch (error) {
                            res.status(400).json({
                                success: false,
                                message: "Commande  is not deleted. " + error.message, // Include error message
                                data: null
                            });
                        }
                    },
                    getCommande: async (req, res) => {
                            try {
                                const getcomm = await commandeModule.find();
                                res.status(200).json({
                                    success: true,
                                    message: "Commande is listed",
                                    data: getcomm// Correct key: 'data'
                                });
                    
                            } catch (error) {
                                res.status(400).json({
                                    success: false,
                                    message: "Commande cannot be listed. " + error.message, // Include error message
                                    data: null
                                });
                            }
                        }
    
}