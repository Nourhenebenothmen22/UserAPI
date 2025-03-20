 const { get } = require("mongoose")
const orderModule=require("../Modules/Order.Module")
module.exports={
    CreateOrder:async(req,res)=>{
        try {
            const Order=await orderModule(req.body)
            await Order.save()
            res.status(200).json({
                success:true,
                message:"order is crated",
                data:Order
               })
               

            
        } catch (error) {
            res.status(400).json({
                success:false,
                message:"order is not crated" +error,
                data:null
               })
            
        }
    },
    getOrderById:async(req,res)=>{
        const id=req.params.id
        try {
            const getorder=await orderModule.findById(id)
            res.status(200).json({
                success:true,
                message:"Order is listed",
                date:getorder
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message:"Order cannot be listed",
                date:null
            })
            
        }
    },
    UpdateOrder:async(req,res)=>{
        const id=req.params.id
        try {
            const OrderUpdate=await orderModule.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json({
                success:true,
                message:"Order is updated",
                date:OrderUpdate
            })
    
        } catch (error) {
            res.status(200).json({
                success:false,
                message:"Order is not updated"+error,
                date:null
            })
    
            
        }
    },
    DeleteOrder:async(req,res)=>{
        const id=req.params.id
        try {
            const deleteOrd=await orderModule.findByIdAndDelete(id)
            res.status(200).json({
                success:true,
                message:"Order is deleted",
                date:deleteOrd
            })
           
    
        } catch (error) {
            res.status(400).json({
                success:false,
                message:"Order is not deleted"+error,
                date:null
           
            
        })
    
    }
    },
    getOrder:async(req,res)=>{
      
        try {
            const getOrd=await orderModule.find()
            res.status(200).json({
                success:true,
                message:"Order is listed",
                date:getOrd
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message:"Order is not listed",
                date:null
            })
            
        }
    }


}