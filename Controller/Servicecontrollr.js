const service=require("../Models/Service")

exports.addservice=(req,res)=>{
    const services = new service
    ({
        ServiceName   : req.body.servicename,
        ServiceImage  : req.body.sericeimg,
        IsActive      : req.body.isactive
    })

    services.save()
    .then((insert)=>{
        res.status(200).json(insert)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

exports.allservice=(req,res)=>{
    service.find()
    .then((allservices)=>{
        res.status(200).json(allservices)
    })
    .catch((err)=>{
        res.status(500).json(err)
    });
}
