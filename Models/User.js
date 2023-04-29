const mongoose = require("mongoose")
const userschema = mongoose.Schema
({
    UserName:String,
    Email:String,
    Password:Number,
    Type:String
})

module.exports = mongoose.model("user",userschema)