import express from 'express';
import dotenv from "dotenv";
import db from "./db.js"
import cors from "cors";
import userRoute from "./routes/UserRoute.js"
import bodyParser from "body-parser";
const app=express();

app.use(cors())
app.use(bodyParser.json());

dotenv.config()

const PORT=process.env.PORT ||4000;

app.get('/',(req,res)=>{
    res.send("Welcome to Backend Server of Book@quest ")

})

app.use("/user",userRoute);


//connect to mongo db

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})
