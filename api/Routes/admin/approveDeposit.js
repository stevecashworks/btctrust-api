const investmentModel=require("../../models/investmentModel")
const userModel=require("../../models/userModel")
const createCustomError=require("../../createCustomError")
const plans={
    starter:{bonus:15,duration:24},
    premium:{bonus:40,duration:48},
    ultimate:{bonus:65,duration:72},
    standard:{bonus:25,duration:48},
    exclusive:{bonus:50,duration:72},
    corporate:{bonus:50,duration:72},
}
const approveDeposit= async(req,res,next)=>{
    const {id}=req.params
    try {
        const thisDeposit= await investmentModel.findById(id)
        const {userId,amount,plan}= thisDeposit
        const extra= (plans[plan].bonus*amount)/100
        const newUserDetails= await userModel.findByIdAndUpdate(userId,{$inc:{balance:amount}},{new:true})
        const newInvestment= await  investmentModel.findByIdAndUpdate(id,{$set:{status:"approved"}},{new:true})
        setTimeout(async()=>{
            await userModel.findByIdAndUpdate(userId, {$inc:{earnings:extra, balance:extra}})
        },((1000*60*60)*(plans[plan].duration)))
        res.status(200).json({success:true,result:newInvestment})
    } catch (error) {
        next(createCustomError(error.message))
    }
}
module.exports=approveDeposit