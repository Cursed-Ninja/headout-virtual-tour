import express from "express";
import { getAll, create } from "../controllers/upload.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync("public")) {
            fs.mkdirSync("public");
        }

        if (!fs.existsSync("public/videos")) {
            fs.mkdirSync("public/videos");
        }

        cb(null, "public/videos");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        var ext = path.extname(file.originalname);

        if (ext !== ".mkv" && ext !== ".mp4") {
            return cb(new Error("Only videos are allowed!"));
        }

        cb(null, true);
    },
});

const router = express.Router();

//get all media
router.get("/all", getAll);

//post create new media
router.post(
    "/create",
    upload.fields([
        {
            name: "videos",
            maxCount: 5,
        },
    ]),
    create
);

export default router;