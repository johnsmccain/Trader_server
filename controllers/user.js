import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const getUser = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const user =  await User.findById(userId);
        const {password, ...user_datails} = user._doc
        // console.log(user_datails)
        res.status(200).json(user_datails);
    } catch (error) {
        next(error);
    }
}

export const getUsers = async(req, res, next) => {
   

    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
} 


export const updateUser = async(req, res, next) => {
    const userId = req.params.userId;
    // const {_id} = req.body;
    // console.log(req.body)

    // const user = {...req.body, firstname: req.body.fullname.split(' ')[0], lastname: req.body.fullname.split(' ')[1] }
    console.log (res.body.fullname.split(" ")) 

    const {fullname, ...user} = {...req.body, firstname: req.body.fullname.split(' ')[0], lastname: req.body.fullname.split(' ')[1] }
    // console.log(user)
    try {   
        // if (res.user.id !== _id) next(createError(406, "You can only update your account!"));
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {$set: user},
            {new: true}
        );
        // console.log(user)
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error);
    }
}

export const updateProfile = async (req, res, next) => {
    const profile = await User.findByIdAndUpdate(
        req.params.userId,
        {$set: res.body},
        {new: true}
    );
    
    // console.log(user)
    res.status(200).json(profile)
}
// export const 