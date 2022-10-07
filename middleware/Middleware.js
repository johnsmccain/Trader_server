import cors from "cors";
import cookieParser from "cookie-parser";



const middleWare = (app, express) => {
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());     
}

export default middleWare;