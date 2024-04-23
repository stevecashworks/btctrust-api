const withdrawalSchema= require("../../models/withdrawalModel")
const createCustomError=require("../../createCustomError")
const approveWithdrawal= async(req,res,next)=>{
    try{
        const transactionId=req.params.id
        const approvedTransaction= await withdrawalSchema.findByIdAndUpdate({$set:{status:"pending",approvedDate:new Date()}})
    return res.status(200).json({success:true,result:approvedTransaction})
    }
    catch(err){
        console.log(err.message) 
        next(createCustomError(err.message))
    }
}
module.exports=approveWithdrawal