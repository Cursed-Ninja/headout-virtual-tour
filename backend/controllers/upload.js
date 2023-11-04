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

export const getMedia = async (req, res) => {
    const { _id } = req.body;
    try {
        const media = await Media.findById(_id);
        res.json(media);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Backendurl/public/videos/file_name.mp4
// export const create = async (req, res) => {
//     const { Title, Location } = req.body;
//     let videosPath = "";
//     let thumbnailPath = "";

//     if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
//         for (let video of req.files.videos) {
//             videosPath += (".\\" + video.path);
//         }
//     }

//     if (Array.isArray(req.files.thumbnail) && req.files.thumbnail.length > 0) {
//         for (let thumbnail of req.files.thumbnail) {
//             thumbnailPath += (".\\" + thumbnail.path);
//         }
//     }

//     console.log(videosPath, thumbnailPath);

//     try {
//         const createdMedia = await Media.create({
//             title: Title,
//             location: Location,
//             videos: videosPath,
//             thumbnail: thumbnailPath,
//         });

//         res.json({ message: "Media created successfully", createdMedia });
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// };

const handleUpload = async (file) => {
    const res = await cloudinary.v2.uploader
        .upload(file,
            {
                resource_type: "video",
            })
    return res;
}


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

