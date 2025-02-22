const subcategorieModule = require("../Modules/subcategorie.Module");

module.exports = {
    CreateSubcategorie: async (req, res) => {
        try {
            const subcategorie = new subcategorieModule(req.body);
            await subcategorie.save();

            res.status(200).json({
                success: true,
                message: "Subcategorie is created",
                data: subcategorie
            });

        } catch (error) {
            console.error("Error creating subcategorie:", error);
            res.status(400).json({
                success: false,
                message: "Subcategorie is not created. " + error.message,
                data: null
            });
        }
    },
    getSubcategorieById: async (req, res) => { // Corrected function name
        const id = req.params.id;
        try {
            const getsubcateg = await subcategorieModule.findById(id);
            res.status(200).json({
                success: true,
                message: "Subcategorie is listed",
                data: getsubcateg // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Subcategorie cannot be listed. " + error.message, // Added error.message
                data: null
            });
        }
    },
    UpdateSubcategorie: async (req, res) => {
        const id = req.params.id;
        try {
            const SubcategorieUpdate = await subcategorieModule.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({
                success: true,
                message: "Subcategorie is updated",
                data: SubcategorieUpdate // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Subcategorie is not updated. " + error.message, // Added error.message
                data: null
            });
        }
    },
    DeleteSubcategorie: async (req, res) => {
        const id = req.params.id;
        try {
            const deletesubcateg = await subcategorieModule.findByIdAndDelete(id);
            res.status(200).json({
                success: true,
                message: "Subcategorie is deleted",
                data: deletesubcateg // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Subcategorie is not deleted. " + error.message, // Added error.message
                data: null
            });
        }
    },
    getSubcategorie: async (req, res) => {  // Corrected function name
        try {
            const getsubcateg = await subcategorieModule.find();
            res.status(200).json({
                success: true,
                message: "Subcategorie is listed",
                data: getsubcateg // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Subcategorie cannot be listed. " + error.message,  // Added error.message
                data: null
            });
        }
    }
};