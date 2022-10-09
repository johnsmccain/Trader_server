export {default as userRoute} from "./auth.js"

export const handleErrorRoute = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
}
