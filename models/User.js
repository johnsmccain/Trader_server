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
    isPublic: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
    },
    coverPicture: {
        type: String,
    },
    about: {
        type: String,
    },
    livesIn: {
        type: String,
    },
    state: {
        type: String,
    },
    address: {
        type: String,
    },
    story:[],
    gallery:{
        type: Array
    },
    country: {
        type: String,
    },
    tag: {
        type: String,
    },
    price: {
        type: Number,
    },
    service_name: {
        type: String,
    },
    clients: {
        type: Array
    },
    followers: {
        type: Array
    },
    following: {
        type: Array
    },
    bookmarkers: {
        type: Array
    },
    bookmarking: {
        type: Array
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    bookmark:{
        type: Array
    },
    settings_id: {
        type: String,
    }, 

}, {timestamps: true});

export default mongoose.model("User", userSchema);