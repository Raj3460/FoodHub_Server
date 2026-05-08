import { Router } from "express";
import multer from "multer";
import { uploadImage } from "./upload.controller";
import auth, { UserRole } from "../../middlewares/auth";

const upload = multer({ dest: "temp/" });
const router = Router();


router.post("/", upload.single("image"), uploadImage);

export default router;