const userModel = require("../../../models/userModel");
const loginWithToken = async (req, res, next) => {
  const { user } = req;
  const { id } = user;
  console.log(id)
  const thisUser = await userModel.findById(id);
  if (!thisUser) {
    console.log("user not found")
    return res.status(404).json({ success: false, result: "user not found" });
  } else {
    const { password, ...others } = thisUser._doc;
    console.log(thisUser)
    return res.status(200).json({ success: true, result: others });
  }
};
module.exports= loginWithToken;
