const {verifyAdmin} = require("../user/verify")
const editCoin= require("./editCoins")
const  {Router}= require("express")
const getStats = require("./getStats")
 
const adminRoute= Router()
adminRoute.post("/editcoin",verifyAdmin,editCoin)
adminRoute.post("/getStats", verifyAdmin, getStats)



module.exports=adminRoute