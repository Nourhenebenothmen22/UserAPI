const providerModule=require("../Modules/provider.Module")
module.exports={
    CreateProvider:async(req,res)=>{
        try {
            const provider=await providerModule(req.body)
            await provider.save()
            res.status(200).json({
                success:true,
                message:"provider is crated",
                data:provider

            })

            
            
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