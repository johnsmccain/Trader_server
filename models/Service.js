import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    username: String,
    price: Number,
    tags: [],
    
})

export default mongoose.model("Service", serviceSchema);