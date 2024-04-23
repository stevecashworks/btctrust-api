const userModel = require("../../models/userModel");
const createCustomError=require("../../createCustomError")

const getStats = async (req,res,next) => {
    try{
        const  allUsers= await userModel.find({})
        
        res.status(200).json({success:true, result:allUsers})

    }
    catch(err){
        next(createCustomError(err.message))
    }
};

module.exports=  getStats