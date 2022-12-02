import User from "../models/User.js";
import { createError } from "../utils/error.js";


export const getUsers = async(req, res, next) => {

    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
} 

export const getUser = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const user =  await User.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const user =  await User.findByIdAndDelete(userId);
        res.status(200).json("user is deleted successfully!");
    } catch (error) {
        next(error);
    }
}

export const updateUser = async(req, res, next) => {
    const userId = req.params.userId;
    // const {_id} = req.body;
    // console.log(req.body)

    // const user = {...req.body, firstname: req.body.fullname.split(' ')[0], lastname: req.body.fullname.split(' ')[1] }
    const {fullname,gallery, story, ...user} = {...req.body, firstname: req.body?.fullname.split(' ')[0], lastname: req.body?.fullname.split(' ')[1] }
    try {   
        // if (res.user.id !== _id) next(createError(406, "You can only update your account!"));


        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {$set: user},
            {new: true}
        );
        // console.log(user)
        res.status(200).json(updatedUser)
        // res.status(200).json("")

    } catch (error) {
        console.log("caugth an error here")
        next(error);
    }
}
export const updateUserStory = async (req, res, next) => {
    const userId = req.params.userId;
    const current_user = await User.findById(userId)
    await current_user.updateOne({$push: {story: req.body.story}})
    res.status(200).json({msg:current_user});

}
export const updateUserGallery = async (req, res, next) => {
    const userId = req.params.userId;
    const current_user = await User.findById(userId)
    await current_user.updateOne({$push: {gallery: req.body.gallery}})
    res.status(200).json({msg:current_user});

}
export const updateUserBookmark = async (req, res, next) => {
    const userId = req.params.userId;
    const current_user = req.body._id
    const bookmarkerUser = await User.findById(userId)
    const bookmarkingUser = await User.findById(current_user)
    try {
        if (!bookmarkerUser.bookmarking.includes(current_user)){
            const newenw = await bookmarkerUser.updateOne({$push: {bookmarking: current_user}})
            await bookmarkingUser.updateOne({$push: {bookmarker: userId}})
            res.status(200).json({msg:newenw});
        }
        res.status(200).json("added already")
    } catch (error) {
        console.log(error)
    }

}