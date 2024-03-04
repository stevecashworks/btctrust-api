const userModel = require("../../models/userModel");
const createCustomError=require("../../createCustomError")

const getStats = async (req,res,next) => {
    try{
        const  allUsers= await userModel.find({})
        console.log({totalBalance:allUsers.reduce((a,b)=>a.balance+b.balance)})
        const totalInvestment=allUsers.reduce((a,b)=>a.balance+b.balance)
        res.status(200).json({success:true, result:{totalInvestment, totalUsers:allUsers.length} })

    }
    catch(err){
        next(createCustomError(err.message))
    }
};

module.exports=  getStats