import app from "./app.js";
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});



app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
});