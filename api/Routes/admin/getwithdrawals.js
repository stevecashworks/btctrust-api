const createCustomError = require("../../createCustomError")
const withdrawalModel=  require("../../models/withdrawalModel")

const getWithdrawals= async(req,res,next)=>{
    try {
        const allWithdrawals= await withdrawalModel.find({})
        return res.status(200).json({success:true, result:allWithdrawals})
    } catch (error) {
        next(createCustomError(error.message))
    }
}
module.exports=getWithdrawals