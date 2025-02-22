const express = require("express");
const app = express();
const port = 3000;
const connectdb=require("./database")
connectdb()
app.use(express.json())
const userRoute=require("./Routers/user.Router")
app.use("/user",userRoute)
const adminRoute=require("./Routers/admin.Router")
app.use("/admin",adminRoute)
const customerRoute=require("./Routers/customer.Router")
app.use("/customer",customerRoute)
const categorieRoute=require("./Routers/categorie.Router")
app.use("/categorie",categorieRoute)
const orderRoute=require("./Routers/order.Router")
app.use("/Order",orderRoute)
const providerRoute=require("./Routers/provider.Router")
app.use("/provider",providerRoute)
const subcategorieRoute=require("./Routers/subcategorie.Router")
app.use("/subcategorie",subcategorieRoute)
const productRoute=require("./Routers/product.Router")
app.use("/product",productRoute)
const commandeRoute=require("./Routers/commande.Router")
app.use("/commande",commandeRoute)
const factureRoute=require("./Routers/facture.Router")
app.use("/facture",factureRoute)
app.listen(port,function(){
    console.log(`the server is running with ${port} open at http://localhost:${port}`)
})