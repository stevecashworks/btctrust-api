const express= require("express")
const withdraw= require("./withdraw")
const {verify}=require("../../Routes/user/verify")
const invest = require("./invest")
const requestRouter= express.Router()
requestRouter.post("/withdraw", verify, withdraw)
requestRouter.post("/invest", verify, invest)









module.exports= requestRouter