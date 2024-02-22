const {verifyAdmin} = require("../user/verify")
const editCoin= require("./editCoins")
const  {Router}= require("express")

const adminRoute= Router()
adminRoute.post("/editcoin",verifyAdmin,editCoin)




module.exports=adminRoute