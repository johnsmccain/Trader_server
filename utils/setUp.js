import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
class SetUp{
    constructor(express){
        this.express = express;
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

    middleWares() {
        const app = this.express();
        app.use(cors());
        app.use(cookieParser());
        app.use(this.express.json());     
    }
}
export default SetUp;