const Mongoose = require("mongoose");

const UserModel = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  earnings: {
    type: Number,
    default: 0,
  },
  balance: {
    type: Number,
    default: 0,
  },
  referralBonus: {
    type: Number,
    default: 0,
  },
});
module.exports=Mongoose.model("users",UserModel)