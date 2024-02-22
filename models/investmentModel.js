const mongoose=require("mongoose")
const investmentSchema= mongoose.Schema({
    amount:{
type:Number,
required:true
    },
    userId:{
        required:true,
        type:String
    },
    approvedDate:{
        type:Date,
        
    },
    coin:{
        type:String,
        enum:["doge", "ethereum", "usdt","btc"],
        required:true
    },
    status:{
        type:String,
        enum:["pending", "approved", "rejected"],
        default:"pending"
    }
}, {timestamps:true})
module.exports= mongoose.model("investments",investmentSchema)

