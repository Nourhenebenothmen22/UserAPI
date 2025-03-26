const adminModule = require("../Modules/admin.Module");
const nodemailer = require('nodemailer');
const {randomBytes} = require("crypto");
const generateCode = randomBytes(6).toString("hex");
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  secure: false, // use SSL
  auth: {
    user: '42c2640dbbb26a',
    pass: 'd667870a7333e5',
  }
});

module.exports = {
    CreateAdmin: async (req, res) => {
        try {
            const admin=await adminModule({...req.body,code:generateCode})
            const savedadmin= await admin.save()
            res.status(200).json({
                success:true,
                message: "admin created",
                data:savedadmin
            })
            const mailOptions = {
                from: 'yourusername@email.com',
                to: savedadmin.email,
                subject: 'hello' +savedadmin.fullname,
                text: 'mail de confirmation',
                html:`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>verify account</h1>
                <a href ="http://localhost:3000/user/verify/${savedadmin.code}"> click here </a>
            </body>
            </html>`
              };
              transporter.sendMail(mailOptions
                
              );


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