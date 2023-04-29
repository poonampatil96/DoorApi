const mongoose=require("mongoose")

const customerschema=mongoose.Schema
({
    CustName:String,
    CustMobNo:Number,
    CustAddress:String,
    Custcity:String,
    userId:{type :mongoose.Schema.Types.ObjectId, ref:'user'}
})

module.exports=mongoose.model("customer",customerschema)