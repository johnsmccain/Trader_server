import mongoose from "mongoose";

const commentScheme = mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
    message: {
        type: String
    },
    actorname:String, 
    actorpicture:String, 
    likes: []
}, {timestamps: true})

export default mongoose.model("Comment", commentScheme)