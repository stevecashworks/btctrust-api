const createCustomError = require("../../../createCustomError")
const userModel=require("../../../models/userModel")

const addWallet= async(req,res,next)=>{
try {
    const userId= req.user.id
    
     const {coin, id}= req.body
    //   get current walletIds
    const currentUser= await userModel.findById(userId) 
    console.log(currentUser)
    const  {walletIds}= currentUser
    const updatedUser=await userModel.findByIdAndUpdate(userId, {$set:{walletIds:{...walletIds,[coin]:id}}}, {new:true} )
    return res.status(200).json({success:true, result: updatedUser})

} catch (error) {
    next(createCustomError(error.message))
}
}
module.exports=addWallet