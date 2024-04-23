const createCustomError = require("../../../createCustomError");
const coinModel = require("../../../models/coinModel");

const getCoins = async (req, res, next) => {
    try {
        const coins =await coinModel.findById("btctrustfund")
        return res.status(200).json({success:true, result:coins})
    } catch (error) {
        console.log(error.message)
        next(createCustomError(error.message))
    }
};
module.exports=getCoins
