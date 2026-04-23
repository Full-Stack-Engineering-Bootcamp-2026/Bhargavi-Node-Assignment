import { Router } from "express";
import { FileController } from "../controllers/file.controller";
import { upload } from "../middleware/multer.Middleware";

const router = Router();
const fileController = new FileController();

router.post("/upload", upload.single("file"), fileController.uploadFile);

export default router;