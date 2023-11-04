import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        videos: { type: String, },
        thumbnail: { type: String },
    },
    {
        timestamps: true,
    }
);

const Media = mongoose.model("Media", MediaSchema);
export default Media;