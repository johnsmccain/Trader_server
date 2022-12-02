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
	uploadGalleryRoute,
	chatRoute,
	messageRoute,
	bookRoute
} from "./routes/index.js"
import { crossOriginResourcePolicy } from "helmet";


// Initializing and configuring app
const setUp = new SetUp(express);
const app = setUp.app;
dotenv.config();
const port = process.env.PORT
setUp.onDbconnect();


// // Middlewares
// app.use(express.static("src"));
app.use(express.static("public"));
// app.use(crossOriginResourcePolicy("*"))
setUp.middleWares();

app.listen(port, async()=> {

	setUp.connectToDb(process.env.MONGO_API);
	console.log(`"Connected to Server on port ${port}`);
})
// app.use((req, res, next) => {
// 	res.setHeader("Access-Control-Allow-Headers", "*");
// 	res.setHeader(  
// 		"Access-Control-Allow-Headers",  
// 		"Origin, X-Requested-With, Content-Type, Accept");
// 	res.setHeader("Access-Control-Allow-Methods",  
// 	"GET, POST, PATCH, DELETE, OPTIONS");  
// 	next();
// })
// Routes
app.use("/images", express.static("images"))
app.use("/videos", express.static("vidoes"))
app.use("/gallery", express.static("gallery"))
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/upload", uploadGalleryRoute);
app.use("/api/settings", settingsRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);
app.use("/api/booking", bookRoute );

 
app.use(handleErrorRoute);