const createCustomError = require("../../../createCustomError.js");
const UserModel = require("../../../models/userModel.js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
const register = async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body);
    const token = await jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.jwt_pass
    );
    const { password, ...others } = newUser._doc;

    return res.status(201).json({ success: true, result: { token, ...others } });
  } catch (error) {
    next(createCustomError(error.message));
  }
};

module.exports = register;
