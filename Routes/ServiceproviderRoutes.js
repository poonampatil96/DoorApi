module.exports=(app)=>{
    const serviceprovidercontrollr=require("../Controller/Serviceprovidercontrollr")

    app.get("/allserviceprovider",serviceprovidercontrollr.allservice)
    app.post("/addserviceprovider",serviceprovidercontrollr.addserviceprovider)
    app.post("/Bytype",serviceprovidercontrollr.SpByType)
    app.post("/Byid",serviceprovidercontrollr.SpById)
    app.post("/update",serviceprovidercontrollr.updatesp)
    app.get("/isvarified",serviceprovidercontrollr.VerifiedSp)
}

