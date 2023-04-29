const serviceprovider=require("../Models/Serviceprovider")

exports.addserviceprovider=(req,res)=>{
    const servicepro=new serviceprovider
    ({
        ServiceProviderName         :req.body.Sname,  
        ServiceProviderEmail       :req.body.SEmail,  
        ServiceProviderMobNo       :req.body.SMobNo, 
        ServiceProviderProfileImg  :req.body.profileimg,  
        ServiceProviderAdharImg    :req.body.adharimg,
        ServiceProviderIsvarified  :req.body.isvarified,
        ServiceProviderVisitingCharg :req.body.visitingchrg,
        SPServiceType                :req.body.Stype,
        userId                       :req.body.uid
    })

    servicepro.save()
    .then((insert)=>{
        res.status(200).json(insert)
    })  
    .catch((err)=>{
        res.status(500).json(err)
    })
}



exports.allservice=(req,res)=>
{
    serviceprovider.find()
    .populate('userId')
    .then((all)=>{
        res.status(200).json(all)
    })
    .catch((err)=>{
        res.status(500).json(err)
    });
}
    
exports.VerifiedSp=(req,res)=>
{
    serviceprovider
    .where("ServiceProviderIsvarified")
    .equals(true)
    .then((verified)=>{
        res.status(200).json(verified)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}


exports.updatesp=(req,res)=>
{
    serviceprovider.findOneAndUpdate({_id:req.body.id},{ServiceProviderIsvarified:req.body.isvarified},{new:true}
        )
        .then((VerifiedSp) => {
            res.status(200).json(VerifiedSp)
            
        })
        .catch((err) => {
            res.status(500).json(err)
        });
}


exports.SpByType=(req,res)=>
{
    const sptype=req.body.Stype
    serviceprovider
    .where("SPServiceType")
    .equals(sptype)
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
        
    });
}

exports.SpById=(req,res)=>
{
serviceprovider.findById(req.body.id)
    .then((result)=>{
         res.status(200).json(result)
    })
    .catch((err)=>{
         res.status(500).send(err)
    })
}