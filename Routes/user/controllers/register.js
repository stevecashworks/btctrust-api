const createCustomError = require("../../../createCustomError.js")
const UserModel=require("../../../models/userModel.js")
const register= async(req, res, next)=>{
try {
const newUser=    await  UserModel.create(req.body)
const {password,...others}= newUser._doc
    return  res.status(201).json({success:true,data:others})
} catch (error) {
    next(createCustomError(error.message))
}
}

module.exports= register