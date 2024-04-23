const createCustomError = require("../../createCustomError");
const withdrawalModel = require("../../models/withdrawalModel");

const declineWithdrawal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newWithdrawal = await withdrawalModel.findByIdAndUpdate(
      id,
      { $set: { status: "declined" } },
      { new: true }
    );
    res.status(200).json({ success: true, result: newWithdrawal });
  } catch (error) {
    next(createCustomError(error.message));
  }
};
module.exports = declineWithdrawal;
