import { Router } from "express";
import * as controller from "./controller.js";
import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

const router = Router();

router.route('/').post(upload.array( 'images'), controller.form);
router.route('/get').get(controller.gets)
router.route("/image/:filename").get(controller.SetPath)
export default router;


