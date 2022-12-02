import express from "express";
import { addBooking } from "../controllers/booking.js";

const router = express.Router();

router.post("/book", addBooking);

export default router;