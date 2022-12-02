import Booking from "../models/Booking"
export const addBooking = async (req, res, next) => {
    const bookingDetails = req.body;
    const newBooking = new Booking(bookingDetails);
    try {
        
    } catch (error) {
        res.status(403).json("Something ")
    } 
}