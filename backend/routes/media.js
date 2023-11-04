import express from "express";
import {
  getAll,
  getOne,
  upload as uploadController,
} from "../controllers/upload.js";
import multer from "multer";
import fs from "fs";
import path from "path";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         var ext = path.extname(file.originalname);

//         if (!fs.existsSync("public")) {
//             fs.mkdirSync("public");
//         }

//         if (ext == ".jpg" || ext == ".jpeg" || ext == ".png") {
//             if (!fs.existsSync("public/thumbnail")) {
//                 fs.mkdirSync("public/thumbnail");
//             }

//             cb(null, "public/thumbnail");
//         } else {
//             if (!fs.existsSync("public/videos")) {
//                 fs.mkdirSync("public/videos");
//             }

//             cb(null, "public/videos");
//         }
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname);
//     },
// });

// const upload = multer({
//     storage: storage,
//     fileFilter: function (req, file, cb) {
//         var ext = path.extname(file.originalname);

//         if (ext !== ".mkv" && ext !== ".mp4") {
//             return cb(new Error("Only videos are allowed!"));
//         }

//         cb(null, true);
//     },
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("/uploads")) {
      fs.mkdirSync("/uploads");
    }
    if (!fs.existsSync("/uploads/videos")) {
      fs.mkdirSync("/uploads/videos");
    }
    cb(null, "/uploads/videos");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("Only videos are allowed!"));
    }
    cb(null, true);
  },
});

const router = express.Router();

//get all media
router.get("/all", getAll);
router.get("/one", getOne);
//post create new media
router.post("/upload", upload.single("video"), uploadController);

export default router;
