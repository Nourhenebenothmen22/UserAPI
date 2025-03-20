const productModule=require("../Modules/Product.Module")
module.exports={
    CreateProduct:async(req,res)=>{
           try {
            if(req.files){
                req.body["galleries"]=req.files.length<=0 ? []: req.files.map((file)=>({
                    image:file.filename
        
                }))
               }
               const product=await productModule(req.body)
               await product.save()
               res.status(200).json({
                   success:true,
                   message:"product is crated",
                   data:product
   
               })
   
               
               
           } catch (error) {
            console.error("Error creating product:", error); // Log the full error
               res.status(400).json({
                   success:false,
                   message:"product is not crated"+error,
                   data:null
               
           })
       }
       
   },
   updateproduct:async(req,res)=>{
       
    try {
        const id=req.params.id
        const existingProduct = await productModule.findById(id);
        if (!existingProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
                data: null
            });
        }
        // Vérifier si des fichiers ont été envoyés
        if (req.files.length > 0) {
            // Ajouter les nouvelles images à la galerie existante
            req.body["galleries"] = [
                ...existingProduct.galleries, // Conserver les anciennes images
                ...req.files.map((file) => ({ image: file.filename })) // Ajouter les nouvelles
            ];
        } else {
            // Ne pas modifier la galerie si aucune nouvelle image n'est envoyée
            req.body["galleries"] = existingProduct.galleries;
        }
        const updaprod=await productModule.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({
            success:true,
            message:"product is updated",
            data:updaprod
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"product is not updated"+error,
            data:null
        })
        
    }
},

 deleteProduct: async (req, res) => {
    try {
        const deletedProduct = await productModule.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted",
            data: deletedProduct // Or just send a success message
        });

    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ // 500 for server errors
            success: false,
            message: "Error deleting product",
            data: null
        });
    }
},

 getProductById :async (req, res) => {
    try {
        const product = await productModule.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "Product retrieved",
            data: product
        });

    } catch (error) {
        console.error("Error getting product by ID:", error);
        res.status(500).json({
            success: false,
            message: "Error retrieving product",
            data: null
        });
    }
},
 getAllProducts :async (req, res) => {
    try {
        const products = await productModule.find(); // Retrieve all products
        
        if (!products || products.length === 0) {  // Check if any products were found
            return res.status(404).json({          // 404 Not Found if no products
                success: false,
                message: "No products found",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "Products retrieved",
            data: products
        });

    } catch (error) {
        console.error("Error getting all products:", error); // Detailed error logging
        res.status(500).json({                          // 500 Internal Server Error
            success: false,
            message: "Error retrieving products",
            data: null
        });
    }
}
    
}