const express = require("express");
const login = require("./controllers/login");
const register = require("./controllers/register");
const loginWithToken  = require("./controllers/loginwithtoken");
const { verify } = require("./verify");
const getCoins = require("./controllers/getCoinwallets");
const getTotalStat = require("./getTotalStats");
const addWallet= require("./controllers/addwallet.js")

const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/tklogin", verify, loginWithToken);
userRouter.post("/register", register);
userRouter.get("/getcoins",getCoins)
userRouter.post("/getstats", verify,getTotalStat)
userRouter.post("/addWallet", verify,addWallet)



module.exports = userRouter;
