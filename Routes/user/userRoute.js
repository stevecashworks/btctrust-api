const express = require("express");
const login = require("./controllers/login");
const register = require("./controllers/register");
const loginWithToken  = require("./controllers/loginwithtoken");
const { verify } = require("./verify");
const getCoins = require("./controllers/getCoinwallets");
const getTotalStat = require("./getTotalStats");

const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/tklogin", verify, loginWithToken);
userRouter.post("/register", register);
userRouter.get("/getcoins",getCoins)
userRouter.post("/getstats", verify,getTotalStat)



module.exports = userRouter;
