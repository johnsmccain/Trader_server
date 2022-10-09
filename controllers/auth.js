import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";


export const register = async(req, res, next) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        const newUser = User({...req.body, password: hashedPassword});
        await newUser.save();
    } catch (error) {
        next(error);
    }

    res.status(201).json({
        success: true,
        status: 201,
        message: `New user created!` 
    });
}


export const login = async(req, res, next) => {

    try {

        const user = await User.findOne({username: req.body.username})
        if (!user) return next(createError(404, "User not found!"));
        
        const pass = await bcrypt.compare(req.body.password, user.password);
        if (!pass) return next(createError(404, "Wrong password!"))

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        const {password, ...user_details} = user._doc;

        res.cookie("access_token", token,{
            httpOnly: true,
        }).status(200).json(user_details)
    } catch (error) {
        next(error);
    }

}
