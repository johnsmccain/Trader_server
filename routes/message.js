import express from "express";
import { createMessage, getMessage, getMessages } from "../controllers/message.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/", getMessages);
router.get("/:chatId", getMessage);

export default router;