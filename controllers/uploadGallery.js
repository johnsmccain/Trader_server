import express from "express";
import multer from "multer";
import { createError } from "../utils/error.js";
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/gallery");
    },
    filename: (req, res, cb) => {
        cb(null, req.body.name)
    }
})

const uploadFile = multer({storage});

router.post("/gallery", uploadFile.single("file"), (req, res, next) => {
    console.log("gallery")
    try {
        res.status(200).json("File uploaded successfully")
    } catch (error) {
        next(createError(500,"Something went wrong!"));
    }
})


export default router;