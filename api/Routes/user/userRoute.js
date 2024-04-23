
const login = require("./controllers/login");
const register = require("./controllers/register");
const loginWithToken  = require("./controllers/loginwithtoken");
const { verify } = require("./verify");
const getCoins = require("./controllers/getCoinwallets");
const getTotalStat = require("./getTotalStats");
const addWallet= require("./controllers/addwallet.js")




module.exports = {login,verify, loginWithToken,register, getCoins,getTotalStat,addWallet};
