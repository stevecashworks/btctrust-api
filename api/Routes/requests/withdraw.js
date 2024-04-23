const withdrawalModel= require("../../models/withdrawalModel.js")
const createCustomError=require("../../createCustomError.js")
const  userModel= require("../../models/userModel.js")
const  withdraw=  async(req,res,next)=>{
    const {amount,walletId}= req.body
try{

    const user= req.user 
const userId= user.id
const newTransaction= await withdrawalModel.create({...req.body,userId}) 
const  newUserDetails=await userModel.findByIdAndUpdate(userId,{$inc:{balance:(-1*amount)},$set:{pendingWithdrawal:amount,lastWithdrawal:amount}})
 return res.status(200).json({success:true,result:newTransaction})
}
catch(err){
    console.log(err.message)
    next(createCustomError(err.message))
}

    

}



module.exports=withdraw