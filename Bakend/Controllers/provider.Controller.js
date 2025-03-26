const providerModule=require("../Modules/provider.Module")
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
module.exports={
    CreateProvider:async(req,res)=>{
        try {
           const provider=await providerModule({...req.body,code:generateCode})
           const savedprovider= await provider.save()
            res.status(200).json({
                success:true,
                message:"provider created",
                data:savedprovider
            }) 
            const mailOptions = {
                from: 'yourusername@email.com',
                to: savedprovider.email,
                subject: 'hello' + '' +savedprovider.fullname,
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
                <a href ="http://localhost:3000/user/verify/${savedprovider.code}"> click here </a>
            </body>
            </html>`
              };
              transporter.sendMail(mailOptions
                
              );


            
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message:"provider is not crated"+error,
                data:null
            
        })
    }
    
},
getproviderById:async(req,res)=>{
    const id=req.params.id
    try {
        const getprovider=await providerModule.findById(id)
        res.status(200).json({
            success:true,
            message:"provider is listed",
            date:getprovider
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"provider cannot be listed",
            date:null
        })
        
    }
},
Updateprovider:async(req,res)=>{
    const id=req.params.id
    try {
        const ProviderUpdate=await providerModule.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({
            success:true,
            message:"provider is updated",
            date:ProviderUpdate
        })

    } catch (error) {
        res.status(200).json({
            success:false,
            message:"provider is not updated",
            date:null
        })

        
    }
},
DeleteProvider:async(req,res)=>{
    const id=req.params.id
    try {
        const deleteprov=await providerModule.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"provider is deleted",
            date:deleteprov
        })
       

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"provider is not deleted",
            date:null
       
        
    })

}
},
getprovider:async(req,res)=>{
  
    try {
        const getprov=await providerModule.find()
        res.status(200).json({
            success:true,
            message:"provider is listed",
            date:getprov
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"provider cannot be listed",
            date:null
        })
        
    }
}

}