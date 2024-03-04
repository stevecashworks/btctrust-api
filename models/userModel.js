const Mongoose = require("mongoose");

const UserModel = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  lastWithdrawal: {
    type: Number,
    default:0
    
  },
  pendingWithdrawal: {
    type: Number,
    default:0
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  phone: {
    type: String,
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
  activeDeposit: {
    type: Number,
  },
  lastDeposit: {
    type: Number,
  },
  

  walletIds: {
    ethereum:{type:String, default:"none" },
    usdt:{type:String, default:"none" },
    dogecoin:{type:String, default:"none" },
    bitcoin:{type:String, default:"none" },
  }
  ,
});
module.exports=Mongoose.model("users",UserModel)