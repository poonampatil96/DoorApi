const user = require("../Models/User")

exports.adduser = (req,res)=>

{
    const usr = new user
    ({
        UserName: req.body.username,
        Email:    req.body.email,
        Password: req.body.password,
        Type:     req.body.type
    })

   usr.save()
   .then((inserteduser)=>
   {
    res.status(200).json(inserteduser)
   })
   .catch((err)=>
   {
    res.status(500).json(err)
   });
}


exports.allusers = (req,res)=>
{
    user.find()
    .then((allusers)=>
    {
      res.status(200).json(allusers)
    })
    .catch((err)=>
    {
      res.status(500).json(err)
    });
}