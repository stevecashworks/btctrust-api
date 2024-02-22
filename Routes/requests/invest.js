const createCustomError = require("../../createCustomError")
const investmentModel = require("../../models/investmentModel")
const userModel = require("../../models/userModel")


const invest= async(req,res,next)=>{
    const userId= req.user.id
    try{
  const newInvestment= await investmentModel.create({userId,...req.body})
  await userModel.findByIdAndUpdate(userId,{$set:{lastDeposit:req.body.amount}})
  res.status(200).json({success:true, result :newInvestment})
    }
    catch(err){
 next(createCustomError(err.message))
    }
}
module.exports=invest