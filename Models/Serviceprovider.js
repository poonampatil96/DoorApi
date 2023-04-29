const mongoose = require("mongoose")

const serviceproviderschema = mongoose.Schema
    ({
        ServiceProviderName: String,
        ServiceProviderEmail: String,
        ServiceProviderMobNo: Number,
        ServiceProviderProfileImg: String,
        ServiceProviderAdharImg: String,
        ServiceProviderIsvarified:{type:Boolean,default:false},
        ServiceProviderVisitingCharg: Number,
        SPServiceType: String,
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
    })

module.exports = mongoose.model("serviceprovider", serviceproviderschema)