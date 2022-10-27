import mongoose from "mongoose";

const SettingSchema = mongoose.Schema({
    general: {
        type: Boolean,
        default: true,
    },
    sound: {
        type: Boolean,
        default: true,
    },
    vibrate: {
        type: Boolean,
        default: false,
    },
    offers: {
        type: Boolean,
        default: true,
    },
    promo: {
        type: Boolean,
        default: false,
    },
    payment: {
        type: Boolean,
        default: true,
    },
    cashback: {
        type: Boolean,
        default: false,
    },
    update: {
        type: Boolean,
        default: false,
    },
    new_service: {
        type: Boolean,
        default: true,
    },
    new_tips: {
        type: Boolean,
        default: false,
    },
})

export default mongoose.model("Setting", SettingSchema)