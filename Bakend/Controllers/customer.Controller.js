const customerModule = require("../Modules/customer.Module");
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
    CreateCustomer: async (req, res) => {
        try {
            if (req.file){
                req.body.picture=req.file.filename
               }
                const customer=await customerModule({...req.body,code:generateCode})
                const savedcustomer= await customer.save()
                res.status(200).json({
                    success:true,
                    message:"customer is created",
                    data:savedcustomer
                })
                const mailOptions = {
                    from: 'yourusername@email.com',
                    to: savedcustomer.email,
                    subject: 'hello' +savedcustomer.fullname,
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
                            <a href ="http://localhost:3000/user/verify/${savedcustomer.code}"> click here </a>
                        </body>
                        </html>`
                  };
                  transporter.sendMail(mailOptions
                    
                  );

        } catch (error) {
            console.error("Error creating customer:", error);
            res.status(400).json({
                success: false,
                message: "Customer is not created. " + error.message,
                data: null
            });
        }
    },
    listCustomers: async (req, res) => { // More descriptive name
        try {
            const customers = await customerModule.find(); 
            res.status(200).json({
                success: true,
                message: "Customers are listed", 
                data: customers
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Customers are not listed. " + error.message, 
                data: null
            });

        }
    },
    deleteCustomer: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedCustomer = await customerModule.findByIdAndDelete(id); // Corrected variable name and method: customerModule.findByIdAndDelete
            if (!deletedCustomer) {
                return res.status(404).json({ // Handle "Not Found"
                    success: false,
                    message: "Customer not found for delete",
                    data: null
                });
            }
            res.status(200).json({
                success: true,
                message: "Customer deleted",
                data: deletedCustomer
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Customer is not deleted. " + error.message, // Added error.message
                data: null
            });

        }

    },
    getCustomerById: async (req, res) => { // More descriptive name
        const id = req.params.id;
        try {
            const customer = await customerModule.findById(id); // Corrected variable name: customerModule
            if (!customer) {
                return res.status(404).json({ // Handle "Not Found"
                    success: false,
                    message: "Customer not found",
                    data: null
                });
            }
            res.status(200).json({
                success: true,
                message: "Customer is listed",
                data: customer
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Customer is not listed. " + error.message, // Added error.message
                data: null
            });

        }
    },
    updateCustomer: async (req, res) => {
        try {
            const id = req.params.id;
    
            // Check if a file was uploaded AND if req.body.picture exists.
            // If req.body.picture already exists, it means the user is updating the picture and we should keep the new one.
            if (req.file) {
                req.body.picture = req.file.filename;
            }
    
            const updatedCustomer = await customerModule.findByIdAndUpdate(id, req.body, { new: true });
    
            if (!updatedCustomer) {
                return res.status(404).json({
                    success: false,
                    message: "Customer not found for update",
                    data: null
                });
            }
    
            res.status(200).json({
                success: true,
                message: "Customer is updated",
                data: updatedCustomer
            });
    
        } catch (error) {
            console.error("Error updating customer:", error);  // More specific log message
            res.status(400).json({
                success: false,
                message: "Customer is not updated. " + error.message,
                data: null
            });
        }
    }
   
    }