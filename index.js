const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const multer = require("multer")
const path = require("path")
const cors = require("cors")

//creating app
const app = express()

app.use(cors())
app.use(bodyparser.json())

//connecting to database or schema
mongoose.connect("mongodb://127.0.0.1:27017/ServicesDB",
    {
        useNewUrlParser: true
    })
    .then((showresult) => {
        console.log(("database connected"))
    })
    .catch((err) => {
        console.log(("database not connected"))
    })

    require("./Routes/UserRoutes")(app)
    require("./Routes/CustRoutes")(app)
    require("./Routes/ServiceproviderRoutes")(app)
    require("./Routes/ServiceRoutes")(app)
    require("./Routes/BookingRoutes")(app)

//file  storage configuration
const imageStorage = multer.diskStorage({
    destination: "Image",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

//file upload configuration
const imageUpload = multer({
    storage: imageStorage,

    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|jfif)$/)) {
            return cb(new Error("Please Upload a Image....."));
        }
        cb(undefined, true);
    },
});

//file upload post req
app.post(
    "/uploadimage",
    imageUpload.single("image"),
    (req, res) => {
        res
            .status(200)
            .json({ filepath: "/image/".concat(req.file.filename), uploaded: true });
    },
    (err, req, res, next) => {
        res.status(500).send({ err: err.message });
    }
);

app.use("/image",express.static("Image"))


console.log("Hello Harshal")

app.listen(5000, () => {
    console.log("server started")
})