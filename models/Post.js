import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId : {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: String, 
}, {timestamps: true});

export default mongoose.model("Post", postSchema)