const mongoose = require("mongoose")

const Bookingschema = mongoose.Schema

    ({
        BookingDate: Date,
        ServiceproviderId: { type: mongoose.Schema.Types.ObjectId, ref: 'serviceprovider' },
        CustId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
        IsAproved: {type:Boolean,default:false},
        IsAccepted:{type:Boolean,default:false}
    })

module.exports = mongoose.model("Booking", Bookingschema)