import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
class SetUp{
    constructor(express){
        this.express = express;
        this.app = this.express();
    }
    connectToDb = async(URI) =>{
        try {
            await mongoose.connect(URI);
            console.log("Connected to Database!");
        } catch (error) {
            throw error
        }
    }
    onDbconnect() {
        mongoose.connection.on("disconnected", () => {
            console.log("Database is disconnected");
        })
    }
    app(){
        return this.app
    }
    middleWares() {
        
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use(this.express.json());  
        this.app.use(bodyParser.json({limit: "30mb", extended: true}));
        this.app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
        this.app.use(this.express.static("public"));
        this.app.use("/images", this.express.static("images"))
        this.app.use("/videos", this.express.static("vidoes"))
    }
}
export default SetUp;