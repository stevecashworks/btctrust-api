const createCustomError = require("../../createCustomError");
const investmentModel = require("../../models/investmentModel");
const withdrawalModel = require("../../models/withdrawalModel");

const getTotalStat = async (req, res, next) => {
try{
    //  totals all have an initial value set to 0
    //  each stat is incremented with each iteration's amount
    let totalDeposit=0 
    let totalWithdrawal=0;
 const allDeposits=await investmentModel.find({userId:req.user.id})
 allDeposits.forEach(deposit=>{
    totalDeposit+=deposit.amount
 })
 const allWithdrawals= await withdrawalModel.find({userId:req.user.id})
 allWithdrawals.forEach(deposit=>{
    totalWithdrawal+=deposit.amount
 })
 return res.status(200).json({success:true,result:{totalDeposit, totalWithdrawal}})
}catch(err){
    next(createCustomError(err.message))
}
};
module.exports=getTotalStat
