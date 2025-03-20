const factureModule = require("../Modules/facture.Module");

module.exports = {
    CreateFacture: async (req, res) => {
        try {
            const facture = new factureModule(req.body); // Correct: use 'new'
            await facture.save(); // Correct: save 'facture'

            res.status(200).json({
                success: true,
                message: "Facture is created", // Corrected spelling
                data: facture
            });

        } catch (error) {
            console.error("Error creating facture:", error); // Log the error
            res.status(400).json({
                success: false,
                message: "Facture is not created. " + error.message, // Corrected spelling and include error message
                data: null
            });
        }
    },
    getFactureById: async (req, res) => {
        const id = req.params.id;
        try {
            const getfacture = await factureModule.findById(id);
            res.status(200).json({
                success: true,
                message: "Facture is listed",
                data: getfacture // Correct key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Facture cannot be listed. " + error.message, // Include error message
                data: null
            });
        }
    },
    Updatefacture: async (req, res) => {
        const id = req.params.id;
        try {
            const factureUpdate = await factureModule.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({
                success: true,
                message: "Facture is updated",
                data: factureUpdate // Correct key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Facture is not updated. " + error.message, // Include error message
                data: null
            });
        }
    },
    DeleteFacture: async (req, res) => {
        const id = req.params.id;
        try {
            const deletefact = await factureModule.findByIdAndDelete(id);
            res.status(200).json({
                success: true,
                message: "Facture is deleted",
                data: deletefact // Correct key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Facture is not deleted. " + error.message, // Include error message
                data: null
            });
        }
    },
    getfacture: async (req, res) => {
        try {
            const getfact = await factureModule.find();
            res.status(200).json({
                success: true,
                message: "Facture is listed",
                data: getfact // Correct key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Facture cannot be listed. " + error.message, // Include error message
                data: null
            });
        }
    }
}
