const express= require("express")
const withdraw= require("./withdraw")
const {verify}=require("../../Routes/user/verify")
const invest = require("./invest")









module.exports= {withdraw, invest}