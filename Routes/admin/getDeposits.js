 const createCustomError = require("../../createCustomError")
const  investmentModel= require("../../models/investmentModel")
 const getInvestments= async(req,res,next)=>{
try {
    const allInvestments= await investmentModel.find()
    return res.status(200).json({success:true, result:allInvestments}) 
} catch (error) {
    next(createCustomError(error.message))
}
 }
 
 module.exports= getInvestments 