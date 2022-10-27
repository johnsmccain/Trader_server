import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log("first")
    if (!token) next(createError(401, "You are not authenticated!"));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) next(createError(403, "Invalid token")) 
        res.user = user;
        next()
    })
}

export const verifyUser = (req, res, next) => {
    // console.log("first")
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.is || req.isAdmin){
            next()
        }else{
            next(createError(403, "You are not authorized!"))
        }
    });
} 

