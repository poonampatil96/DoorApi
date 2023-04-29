

module.exports=(app)=>{
    const Customercontrollr=require("../Controller/Customercontrollr")
     
    app.get("/allcust",Customercontrollr.allcust)
    app.post("/custadd",Customercontrollr.addcustomer)
    app.post("/updatecust",Customercontrollr.updatecust)
}