import express from "express"; // Express Server
import bodyParser from "body-parser"; // For parsing body of requests in desired format
import mongoose from "mongoose"; // Library for easy use of mongodb
import cors from "cors"; // Library to allow cross origin requests
import dotenv from "dotenv"; // For extracting data from env files
import morgan from "morgan"; // For logging requests into console

import { fileURLToPath } from "url";
import { dirname } from "path";

import authRoutes from "./routes/auth.js"; // importing authentication related routers
import mediaRoutes from "./routes/media.js"; // importing media related routers
import cloudinary from "cloudinary"; // For uploading media to cloudinary
// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Log the configuration
console.log(cloudinary.config());

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(morgan("dev"));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("dist", { dotfiles: "allow" }));

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/media", mediaRoutes);

app.get("/api", (req, res) => {
  res.send("API is running");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const CONNECTION_URL = `mongodb+srv://${
  process.env.DB_USERNAME
}:${encodeURIComponent(
  process.env.DB_PSWD
)}@cluster.lczmihh.mongodb.net/headout?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 6001;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER PORT: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
