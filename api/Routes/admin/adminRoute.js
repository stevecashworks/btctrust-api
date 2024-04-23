const { verifyAdmin } = require("../user/verify");
const editCoin = require("./editCoins");
const getStats = require("./getStats");
const getWithdrawals = require("./getwithdrawals");
const approveWithdrawal = require("./approveWithdrawal");
const declineWithdrawal = require("./declineWithdrawal");
const getInvestments = require("./getDeposits");
const approveDeposit = require("./approveDeposit");
const declineInvestment = require("./declineDeposit");



module.exports = {
  editCoin,
  verifyAdmin,
  getStats,
  getInvestments,
  getWithdrawals,
  approveWithdrawal,
  declineWithdrawal,
  approveDeposit,
  declineInvestment
};
