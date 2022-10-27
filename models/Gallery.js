import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    userId: String,
    pictures: [String],
})

export default mongoose.model("Gallery", gallerySchema);