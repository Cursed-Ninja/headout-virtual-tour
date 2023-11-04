import Media from "../models/Media.js";
import cloudinary from "cloudinary";

export const getAll = async (req, res) => {
    try {
        const media = await Media.find();
        res.json(media);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

export const getOne = async (req, res) => {
    const { id } = req.query;
    try {
        const media = await Media.findById(id);
        res.json(media);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const handleUpload = async (file) => {
    const res = await cloudinary.v2.uploader.upload(file, {
        resource_type: "video",
    });
    return res;
};

export const upload = async (req, res) => {
    try {
        const cldRes = await handleUpload(req.file.path);
        const { Title, Location, thumbnail } = req.body;
        const videoLink = cldRes.secure_url;
        const createdMedia = await Media.create({
            title: Title,
            location: Location,
            videos: videoLink,
            thumbnail,
        });
        res.json({ message: "Media created successfully", createdMedia });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
