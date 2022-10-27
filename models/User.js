import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
    phone: {
        type: String,
    },
    dob: {
        type: Date,
    },
    email:{
        type: String,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isTalent: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String
    },
    coverPicture: {
        type: String
    },
    about: {
        type: String
    },
    price: {
        type: Number
    },
    livesIn: {
        type: String
    },
    state: {
        type: String
    },
    address: {
        type: String
    },
    gallery: {
        type: String
    },
    position: {
        type: String
    },
    tag: {
        type: String
    },
    story:{
        type: [String]
    },
    country: {
        type: String
    },
    clients: [],
    review: [],
    followers: [],
    following: [],
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    settings_id: String 

}, {timestamps: true});

export default mongoose.model("User", userSchema);