import express from 'express';
import {get_settings, update_settings } from "../controllers/setting.js";

const router = express.Router();

router.get("/:settings_id", get_settings);
router.post("/:settings_id", update_settings);

export default router;