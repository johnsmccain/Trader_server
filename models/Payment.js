import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
    bookingId: {
        type: String,
        required: true
    }
},{timestamps: true});

export default mongoose.model("Payment", paymentSchema);