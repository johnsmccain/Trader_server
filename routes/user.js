import express from "express";
import { getUser, getUsers, updateProfile, updateUser } from "../controllers/user.js";
import {verifyToken, verifyUser} from "../utils/verifyToken.js"
const router = express.Router();

router.get("/", getUsers);
router.get("/:userId", getUser);
// router.post("/:userId", verifyUser, updateUser);
router.post("/:userId", updateUser);
router.post("/:userId/profile", updateProfile);

export default router;