const customer=require("../Models/Customer")

exports.addcustomer=(req,res)=>{
    const custo =new customer 
    ({
             CustName:req.body.custname,
             CustMobNo:req.body.custmbNo,
             CustAddress:req.body.custadd,
             Custcity:req.body.custcity,
             userId:req.body.uid
 })

custo.save()
.then((custinsert)=>{
   res.status(200).json(custinsert)
})
.catch((err)=>{
   res.status(500).json(err)
})
}
exports.allcust=(req,res)=>{
   customer.find()
   .populate('userId','UserName Email')
   .then((all)=>{
      res.status(200).json(all)
   })
   .catch((err)=>{
      res.status(500).json(err)
   });
}

exports.updatecust=(req,res)=>{
   customer.findOneAndUpdate({_id:req.body.id},{Custcity:req.body.custcity},{new:true})
   .then((result) => {
      res.status(200).json(result)
      
   }).catch((err) => {
      res.status(500).json(err)
   });
}



