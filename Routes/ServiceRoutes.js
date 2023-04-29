module.exports=(app)=>
{
    const servicecontrollr=require("../Controller/Servicecontrollr")

    app.get("/allservice",servicecontrollr.allservice)
    app.post("/addservice",servicecontrollr.addservice)
}