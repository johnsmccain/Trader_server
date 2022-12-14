export {default as authRoute} from "./auth.js";
export {default as userRoute} from "./user.js";
export {default as uploadRoute} from "../controllers/upload.js";
export {default as uploadGalleryRoute} from "../controllers/uploadGallery.js";
export {default as settingsRoute} from "./settings.js";
export {default as chatRoute} from "./chat.js";
export {default as messageRoute} from "./message.js";
export {default as bookRoute} from "./booking.js";

export const handleErrorRoute = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
}
