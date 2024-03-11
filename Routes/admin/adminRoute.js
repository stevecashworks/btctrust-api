const {verifyAdmin} = require("../user/verify")
const editCoin= require("./editCoins")
const  {Router}= require("express")
const getStats = require("./getStats")
const getWithdrawals = require("./getwithdrawals")
const approveWithdrawal = require("./approveWithdrawal")
const declineWithdrawal = require("./declineWithdrawal")
const getInvestments = require("./getDeposits")
const approveDeposit = require("./approveDeposit")
const declineInvestment = require("./declineDeposit")
 
const adminRoute= Router()
adminRoute.post("/editcoin",verifyAdmin,editCoin)
adminRoute.post("/getStats", verifyAdmin, getStats)
adminRoute.post("/getinvestments", verifyAdmin, getInvestments)
adminRoute.post("/getwithdrawals", verifyAdmin, getWithdrawals)
adminRoute.post("/approvewithdrawal/:id", verifyAdmin, approveWithdrawal)
adminRoute.post("/declinewithdrawal/:id", verifyAdmin, declineWithdrawal)
adminRoute.post("/approveinvestment/:id", verifyAdmin, approveDeposit)
adminRoute.post("/declineinvestment/:id", verifyAdmin, declineInvestment)



module.exports=adminRoute