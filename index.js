// Importing packages
import express from "express";
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import middleWare from "./middleware/Middleware.js";
import SetUp from "./utils/setUp.js";


// Importing files

// Initializing and configuring app
const app = express();
const setUp = new SetUp(express);
dotenv.config();
const port = process.env.PORT
setUp.onDbconnect();


// middlewares
setUp.middleWares(app, express);
app.listen(port, ()=> {
	setUp.connectToDb(process.env.MONGO_API);
	console.log("Connected to Server");
})
