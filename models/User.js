import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isTalent: {
        type: Boolean,
        default: false
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    state: String,
    story:{
        type: [String]
    },
    country: String,
    clients: [],
    followers: [],
    following: [],
    rating: {
        type: Number,
        min: 0,
        max: 5
    }

}, {timestamps: true});

export default mongoose.model("User", userSchema);