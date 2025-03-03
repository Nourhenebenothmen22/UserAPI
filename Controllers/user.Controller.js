const userModule=require("../Modules/user.Module")
const { join } = require('path');
const bcrypt=require('bcrypt')
const nodemailer=require('nodemailer');
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
    verifyCode:async (req, res) => {
        try {
            const verifyCode = await userModule.findOne({ code: req.params.code });
        if (!verifyCode) {
                return res.sendFile(join(__dirname + "../../template/error.html"));
            }
          // Mise à jour sans déclencher `pre("save")`
            await userModule.updateOne(
                { _id: verifyCode._id },
                { $unset: { code: "" }, $set: { verify: true } }
            );
            return res.sendFile(join(__dirname + "../../template/success.html"));
        } catch (err) {
            return res.sendFile(join(__dirname + "../../template/error.html"));
        }
    }
}