const withdrawalModel= require("../../models/withdrawalModel.js")
const createCustomError=require("../../createCustomError.js")
const  withdraw=  async(req,res,next)=>{
try{

    const user= req.user 
const userId= user.id
const newTransaction= await withdrawalModel.create({...req.body,userId}) 
 return res.status(200).json({success:true,result:newTransaction})
}
catch(err){
    consolle.log(err.message)
    next(createCustomError(err.message))
}

    

}



module.exports=withdraw