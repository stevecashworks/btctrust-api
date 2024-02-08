const userModel = require("../../../models/userModel.js");
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
  }
  else{
    const {password,...others}= thisUser._doc
    return res.status(200).json({success:true,result:others})
  }
};
module.exports = login;
