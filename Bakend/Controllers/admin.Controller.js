const adminModule = require("../Modules/admin.Module");

module.exports = {
    CreateAdmin: async (req, res) => {
        try {
            const admin = new adminModule(req.body);
            await admin.save();

            res.status(200).json({
                success: true,
                message: "Admin is created",
                data: admin
            });

        } catch (error) {
            console.error("Error creating admin:", error);
            res.status(400).json({
                success: false,
                message: "Admin is not created. " + error.message,
                data: null
            });
        }
    },
    getAdminById: async (req, res) => { // Corrected function name
        const id = req.params.id;
        try {
            const getadmin = await adminModule.findById(id);
            res.status(200).json({
                success: true,
                message: "Admin is listed",
                data: getadmin // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Admin cannot be listed. " + error.message, // Added error.message
                data: null
            });
        }
    },
    UpdateAdmin: async (req, res) => { // Corrected function name
        const id = req.params.id;
        try {
            const adminupdate = await adminModule.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({
                success: true,
                message: "Admin is updated",
                data: adminupdate // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Admin is not updated. " + error.message, // Added error.message
                data: null
            });
        }
    },
    DeleteAdmin: async (req, res) => { // Corrected function name
        const id = req.params.id;
        try {
            const deleteAdmin = await adminModule.findByIdAndDelete(id);
            res.status(200).json({
                success: true,
                message: "Admin is deleted",
                data: deleteAdmin // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Admin is not deleted. " + error.message, // Added error.message
                data: null
            });
        }
    },
    getAdmin: async (req, res) => { // Corrected function name
        try {
            const getAdmin = await adminModule.find();
            res.status(200).json({
                success: true,
                message: "Admin is listed",
                data: getAdmin // Consistent key: 'data'
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Admin cannot be listed. " + error.message,  // Added error.message
                data: null
            });
        }
    }
};