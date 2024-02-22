const coinModel = require("../../models/coinModel");
const createCustomError=require("../../createCustomError")
const editCoin=async(req,res,next)=>{
try {
    const updatedCoin= await coinModel.findByIdAndUpdate("btctrustfund",{$set:req.body},{new:true})
    res.status(200).json({success:true,result:updatedCoin})
} catch (error) {
    next(createCustomError(error.message))
}
}

module.exports= editCoin