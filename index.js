// Importing packages
import express from "express";
import dotenv from "dotenv"


// Importing files
import SetUp from "./utils/setUp.js";
import {
	authRoute, 
	userRoute, 
	handleErrorRoute, 
	uploadRoute,
	settingsRoute,
} from "./routes/index.js"


// Initializing and configuring app
const setUp = new SetUp(express);
const app = setUp.app;
dotenv.config();
const port = process.env.PORT
setUp.onDbconnect();


// // Middlewares
// app.use(express.static("src"));
app.use(express.static("public"));

setUp.middleWares();

app.listen(port, async()=> {

	setUp.connectToDb(process.env.MONGO_API);
	console.log(`"Connected to Server on port ${port}`);
})

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/settings", settingsRoute);
app.use("/images", express.static("images"))
app.use("/videos", express.static("vidoes"))
// 
app.use(handleErrorRoute);