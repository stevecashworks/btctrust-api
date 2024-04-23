const express = require("express");
const cors = require("cors");
const connect_Db = require("./connectdb");
const dotenv = require("dotenv");
//  user Functions
const {
  login,
  loginWithToken,
  register,
  getCoins,
  getTotalStat,
  addWallet,
  verify,
} = require("./Routes/user/userRoute.js");

//  admin functions
const {
  editCoin,
  verifyAdmin,
  getStats,
  getInvestments,
  getWithdrawals,
  approveWithdrawal,
  declineWithdrawal,
  approveDeposit,
  declineInvestment,
} = require("./Routes/admin/adminRoute.js");

//  request functions

const { withdraw, invest } = require("./Routes/requests/requests.js");
const userRouter = require("./Routes/user/userRoute");
const handleError = require("./error");
const requestRoute = require("./Routes/requests/requests.js");
const adminRouter = require("./Routes/admin/adminRoute.js");

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());

//  user routing optimized to fit with vercel's free tier serverless function count policy

server.post("users/login", login);
server.post("users/register", register);
server.get("users/getcoins", getCoins);
server.post("users/tklogin", verify, loginWithToken);
server.post("users/getstats", verify, getTotalStat);
server.post("users/addwallet", verify, addWallet);

// end user Routing

// start admin routing optimized

server.post("admin/editcoin", verifyAdmin, editCoin);
server.post("admin/getStats", verifyAdmin, getStats);
server.post("admin/getinvestments", verifyAdmin, getInvestments);
server.post("admin/getwithdrawals", verifyAdmin, getWithdrawals);
server.post("admin/approvewithdrawal/:id", verifyAdmin, approveWithdrawal);
server.post("admin/declinewithdrawal/:id", verifyAdmin, declineWithdrawal);
server.post("admin/approveinvestment/:id", verifyAdmin, approveDeposit);
server.post("admin/declineinvestment/:id", verifyAdmin, declineInvestment);

//  end admin route

//  request route
server.post("requests/withdraw", verify, withdraw);
server.post("requests/invest", verify, invest);



server.get("/", (req, res) => {
  res.send("okay");
});
server.use(handleError);
const mongo_uri = process.env.mongo_uri;
const port = process.env.port || 5000;

server.get("/", (req, res, next) => {
  res.status(200).send("developed by me");
});

const startServer = async () => {
  try {
    await connect_Db(mongo_uri);
    server.listen(port, () => {
      console.log(`Server is actively listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
startServer();
