const user = require("../Models/User")

module.exports = (app)=>
{
  const Usercontrollr = require("../Controller/Usercontrollr")

  app.get("/users",Usercontrollr.allusers)
  app.post("/adduser",Usercontrollr.adduser)
}