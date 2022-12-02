import express from "express";
import { deleteUser, getUser, getUsers, updateUser, updateUserBookmark, updateUserGallery, updateUserStory } from "../controllers/user.js";
import {verifyToken, verifyUser} from "../utils/verifyToken.js"
const router = express.Router();

router.get("/", getUsers);
router.get("/:userId", getUser);
// router.post("/:userId", verifyUser, updateUser);
router.post("/:userId", updateUser);
router.post("/:userId/story", updateUserStory);
router.post("/:userId/gallery", updateUserGallery);
router.post("/:userId/bookmark", updateUserBookmark);
router.delete("/:userId", deleteUser);

export default router;