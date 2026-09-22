import { Router } from "express";
import analyserController from "../controllers/analyser.controller.js";
import upload from "../middleware/multer.js";

const router = Router();

router.post("/analyse", upload.single("pdf"), analyserController);

export default router;
