import express from "express";
import {createChat, userChats, findChat, getChats, deleteChat, deleteChats} from '../controllers/chat.js';

const router =  express.Router();

router.post("/", createChat);
router.get("/", getChats);
router.get("/:userId", userChats);
router.get("/find/:senderId/:receiverId", findChat);
router.delete("/:chatId", deleteChat);
router.delete("/all", deleteChats);

export default router;