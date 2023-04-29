const mongoose=require("mongoose")

const serviceSchema=mongoose.Schema
({
    ServiceName:String,
    ServiceImage:String,
    IsActive:{type:Boolean,default:true},
})

module.exports=mongoose.model("service",serviceSchema)