// Importing packages
import express from "express";
import dotenv from "dotenv"


// Importing files
import SetUp from "./utils/setUp.js";
import {userRoute, handleErrorRoute} from "./routes/index.js"


// Initializing and configuring app
const setUp = new SetUp(express);
const app = setUp.app;
dotenv.config();
const port = process.env.PORT
setUp.onDbconnect();


// Middlewares
setUp.middleWares();

app.listen(port, async()=> {

	setUp.connectToDb(process.env.MONGO_API);
	console.log(`"Connected to Server on port ${port}`);
})

// Routes
app.use("/api/user", userRoute);

// 
app.use(handleErrorRoute);