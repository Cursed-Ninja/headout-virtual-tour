import Media from "../models/Media.js";

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
        const file = await Media.findById(_id);
        res.sendFile(file.videos);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Backendurl/public/videos/file_name.mp4
export const create = async (req, res) => {
    const { Title, Location } = req.body;
    let videosPath = "";

    if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
        for (let video of req.files.videos) {
            videosPath += (".\\" + video.path);
        }
    }

    console.log(videosPath);

    try {
        const createdMedia = await Media.create({
            title: Title,
            location: Location,
            videos: videosPath,
        });

        res.json({ message: "Media created successfully", createdMedia });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};