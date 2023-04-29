module.exports=(app)=>{
    const Bookingcontrollr=require("../Controller/Bookingcontrollr")

    app.get("/allbooking", Bookingcontrollr.allbooking)
    app.post("/addbooking", Bookingcontrollr.addbooking)
    app.post("/updateaprovebooking",Bookingcontrollr.updateAprovebooking)
    app.post("/bookbyid",Bookingcontrollr.bookById)
    app.post("/updateaccepted",Bookingcontrollr.updateAccepted)
    app.get("/allaccepted",Bookingcontrollr.acceptedBooking)
    app.get("/allapprove",Bookingcontrollr.approveBooking)
}