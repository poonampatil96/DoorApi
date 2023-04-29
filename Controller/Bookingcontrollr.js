const Booking=require("../Models/Booking")

exports.addbooking=(req,res)=>{
    const book=new Booking
    ({
        BookingDate        :req.body.BDate,
        ServiceproviderId  :req.body.SPId,
        CustId             :req.body.cid,
        IsAproved          :req.body.isaprovded,
        IsAccepted         :req.body.isaccept
    })

    book.save()
    .then((insert)=>{
        res.status(200).json(insert)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

exports.allbooking=(req,res)=>
{
    Booking.find()
    .populate('CustId')
    .populate('ServiceproviderId')
    .then((all)=>{
        res.status(200).json(all)
    })
    .catch((err)=>{
        res.status(500).json(err)
    });
}

//update approved
exports.updateAprovebooking=(req,res)=>
{
    Booking.findOneAndUpdate({_id:req.body.id},{ IsAproved:req.body.isaprovded},{new:true})
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
    });
    
}

//update accepted req true or false
exports.updateAccepted=(req,res)=>
{
    Booking.findOneAndUpdate({_id:req.body.id},{IsAccepted:req.body.isaccept},{new:true})
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
    });
}

//all aproved req
exports.approveBooking=(req,res)=>
{
    Booking
   .where("IsAproved")
    .equals(true)
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
    });

}

//all accepted booking
exports.acceptedBooking=(req,res)=>
{
    Booking
    .where("IsAccepted")
    .equals(true)
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
    });
}

//show  booking by id
exports.bookById=(req,res)=>{
    Booking.findById(req.body.id)
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
    });
}