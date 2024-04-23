const createCustomError = require("../../createCustomError");
const userModel = require("../../models/userModel");
const investmentModel = require("../../models/investmentModel");
const withdrawalModel = require("../../models/withdrawalModel");
const {verify}= require("./verify.js")
//  add wallet
const addWallet = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const { coin, id } = req.body;
    //   get current walletIds
    const currentUser = await userModel.findById(userId);
    console.log(currentUser);
    const { walletIds } = currentUser;
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $set: { walletIds: { ...walletIds, [coin]: id } } },
      { new: true }
    );
    return res.status(200).json({ success: true, result: updatedUser });
  } catch (error) {
    next(createCustomError(error.message));
  }
};
// addWallet

// getCoins
const getCoins = async (req, res, next) => {
  try {
    const coins = await coinModel.findById("btctrustfund");
    return res.status(200).json({ success: true, result: coins });
  } catch (error) {
    console.log(error.message);
    next(createCustomError(error.message));
  }
};
// end getcoins

//  login
const login = async (req, res, next) => {
  const { password, email } = req.body;
  const thisUser = await userModel.findOne({ email });
  if (!thisUser) {
    return res.status(404).json({
      success: false,
      result: `User with email: "${email}" was not found`,
    });
  } else if (password != thisUser.password) {
    return res
      .status(403)
      .json({ success: false, result: "Incorrect password" });
  } else {
    const token = await jwt.sign(
      { id: thisUser._id, isAdmin: thisUser.isAdmin },
      process.env.jwt_pass
    );
    const { password, ...others } = thisUser._doc;
    return res
      .status(200)
      .json({ success: true, result: { ...others, token } });
  }
};
// end login logic

// login with token logic
const loginWithToken = async (req, res, next) => {
  const { user } = req;
  const { id } = user;
  console.log(id);
  const thisUser = await userModel.findById(id);
  if (!thisUser) {
    console.log("user not found");
    return res.status(404).json({ success: false, result: "user not found" });
  } else {
    const { password, ...others } = thisUser._doc;
    console.log(thisUser);
    return res.status(200).json({ success: true, result: others });
  }
};


// login with token logic ends here

// register logic
const register = async (req, res, next) => {
  try {
    const newUser = await userModel.create(req.body);
    const token = await jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.jwt_pass
    );
    const { password, ...others } = newUser._doc;

    return res
      .status(201)
      .json({ success: true, result: { token, ...others } });
  } catch (error) {
    next(createCustomError(error.message));
  }
};
// register logic ends here

// get stats logic
const getTotalStat = async (req, res, next) => {
  try {
    //  totals all have an initial value set to 0
    //  each stat is incremented with each iteration's amount
    let totalDeposit = 0;
    let totalWithdrawal = 0;
    const allDeposits = await investmentModel.find({ userId: req.user.id });
    allDeposits.forEach((deposit) => {
      totalDeposit += deposit.amount;
    });
    const allWithdrawals = await withdrawalModel.find({ userId: req.user.id });
    allWithdrawals.forEach((deposit) => {
      totalWithdrawal += deposit.amount;
    });
    return res
      .status(200)
      .json({ success: true, result: { totalDeposit, totalWithdrawal } });
  } catch (err) {
    next(createCustomError(err.message));
  }
};
// get stats logic ends here



module.exports = {
  login,
  verify,
  loginWithToken,
  register,
  getCoins,
  getTotalStat,
  addWallet,
};
