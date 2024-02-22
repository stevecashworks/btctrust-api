const mongoose = require("mongoose");
const withdrawalSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    userId:{
      type:String,
      required:true
    },
    approvedDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["approved", "pending", "rejected"],
      default: "pending",
    },
    wallet:{
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("withdrawals",withdrawalSchema);
