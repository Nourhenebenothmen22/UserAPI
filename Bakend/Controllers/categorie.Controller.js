const categorieModule = require("../Modules/categorie.Module");

module.exports = {
    CreateCategorie: async (req, res) => {
        try {
            if(req.files){
                req.body["galleries"]=req.files.length<=0 ? []: req.files.map((file)=>({
                    image:file.filename
        
                }))
               }
            const categorie = new categorieModule(req.body);
            await categorie.save();

            res.status(200).json({
                success: true,
                message: "Categorie is created",
                data: categorie
            });

        } catch (error) {
            console.error("Error creating categorie:", error);
            res.status(400).json({
                success: false,
                message: "Categorie is not created. " + error.message,
                data: null
            });
        }
    },
    getCategorieById: async (req, res) => {
        const id = req.params.id;
        try {
            const getcateg = await categorieModule.findById(id);
            res.status(200).json({
                success: true,
                message: "Categorie is listed",
                data: getcateg // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Categorie cannot be listed. " + error.message, // Added error.message
                data: null
            });
        }
    },
    UpdateCategorie: async (req, res) => {
        try {
            const id = req.params.id;
              const existingCategorie = await categorieModule.findById(id);
                    if (!existingCategorie) {
                        return res.status(404).json({
                            success: false,
                            message: "Categorie not found",
                            data: null
                        });
                    }
                    // Vérifier si des fichiers ont été envoyés
                    if (req.files.length > 0) {
                        // Ajouter les nouvelles images à la galerie existante
                        req.body["galleries"] = [
                            ...existingCategorie.galleries, // Conserver les anciennes images
                            ...req.files.map((file) => ({ image: file.filename })) // Ajouter les nouvelles
                        ];
                    } else {
                        // Ne pas modifier la galerie si aucune nouvelle image n'est envoyée
                        req.body["galleries"] = existingProduct.galleries;
                    }
            const categorieUpdate = await categorieModule.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({
                success: true,
                message: "Categorie is updated",
                data: categorieUpdate // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Categorie is not updated. " + error.message, // Added error.message
                data: null
            });
        }
    },
    DeleteCategorie: async (req, res) => {
        const id = req.params.id;
        try {
            const deletecateg = await categorieModule.findByIdAndDelete(id);
            res.status(200).json({
                success: true,
                message: "Categorie is deleted",
                data: deletecateg // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Categorie is not deleted. " + error.message, // Added error.message
                data: null
            });
        }
    },
    getCategorie: async (req, res) => {
        try {
            const getcateg = await categorieModule.find();
            res.status(200).json({
                success: true,
                message: "Categorie is listed",
                data: getcateg // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Categorie cannot be listed. " + error.message,  // Added error.message
                data: null
            });
        }
    }
};