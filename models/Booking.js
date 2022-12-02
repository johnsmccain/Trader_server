import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    serviceId: {
        type: String,
        required:true
    },
    service:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    client: {
        type: String,
        required: true
    },
    worker: {
        type: String,
        required: true
    },
    details: {
        type: Object,
    },
    price: {
        type: Number,
        required: true
    },
    promo: {
        type: Number
    }
},{timestamps: true})

bookingSchema.statics.createBooking = async function(booking) {
    const {service, category, worker, client, details, price} = booking;
    if (!service || !category || !worker || !client || !details || !price) {
        throw Error("All fields must be fild")
    }
}

export default mongoose.model("Booking", bookingSchema);