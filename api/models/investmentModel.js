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
    },
    plan:{
        type:String,
        enum:["starter", "premium", "ultimate", "corporate","exclusive", "standard"], 
        required:true
    }
}, {timestamps:true})
module.exports= mongoose.model("investments",investmentSchema)

