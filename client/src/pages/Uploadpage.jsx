import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDropzone } from "react-dropzone";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Backdrop, CircularProgress, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import { useUserContext } from "../store/Context";
import FileUpload from "../components/FileUpload";

const UploadPage = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedVideoFile, setUploadedVideoFile] = useState(null);
  const [uploadedThumbnailFile, setUploadedThumbnailFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const convertBase64 = async (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("thumbnail", await convertBase64(uploadedThumbnailFile));
      formData.append("video", uploadedVideoFile);
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/media/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsUploaded(true);
      } else {
        const responseData = await response.json();
        alert(responseData.error);
      }
    } catch (err) {
      alert(err);
    }
    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div class="circle xxlarge shade1"></div>
      <div class="circle xlarge shade2"></div>
      <div class="circle large shade3"></div>
      <div class="circle medium shade4"></div>
      <div class="circle small shade5"></div>
      <CssBaseline />
      <Navbar isHomePage={false} />
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        elevation={2}
      >
        {isUploaded ? (
          <Typography component="p" variant="body1" sx={{}}>
            Upload successful!
          </Typography>
        ) : (
          <>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <CloudUploadIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Upload Video
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              {
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        name="Title"
                        autoComplete="title"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        name="Location"
                        autoComplete="location"
                      />
                    </Grid>
                  </Grid>
                  <FileUpload
                    uploadedFile={uploadedVideoFile}
                    setUploadedFile={setUploadedVideoFile}
                    fileType="video"
                  />
                  <FileUpload
                    uploadedFile={uploadedThumbnailFile}
                    setUploadedFile={setUploadedThumbnailFile}
                    fileType="thumbnail (image)"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Upload
                  </Button>
                </>
              }
            </Box>
          </>
        )}
      </Paper>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </Container>
  );
};

export default UploadPage;
