import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT;


// app.use(cors({
//     origin: process.env.CORS_ORIGINS,
//     credentials: true
// }))


app.use(bodyParser.json({ limit: "4kb" })); 
app.use(bodyParser.urlencoded({ extended: true, limit: "4kb" }));
app.use(express.static('public')); 

app.use(cookieParser());

// Authentication
import authRouter from './routes/auth.route.js'
app.use('/auth',authRouter);



mongoose.connect(`mongodb+srv://dhairyathareja:${process.env.DB_PASS}@cropcare.hejrg.mongodb.net/?retryWrites=true&w=majority&appName=CropCare`)
    .then(() => {
        app.listen(PORT, () => {
            console.log("http://localhost:" + PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })