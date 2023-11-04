import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDropzone } from "react-dropzone";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Backdrop,
  CircularProgress,
  Paper,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { useUserContext } from "../store/Context";

const UploadPage = () => {
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const { state } = useUserContext();
  const { user, isLoggedIn, isSeller } = state;

  const onDrop = (acceptedFiles) => {
    setUploadedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("videos", uploadedFile);

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/media/create`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Handle success
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
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
        elevation={2}
      >
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
              <Box
                {...getRootProps()}
                style={{
                  cursor: "pointer",
                  border: "2px dotted",
                  padding: "20px",
                  textAlign: "center",
                  marginTop: "16px",
                }}
              >
                <input {...getInputProps()} />
                <Typography component="p" variant="body1" color="#666">
                  Drag 'n' drop a video file here, or click to select one.
                </Typography>
              </Box>

              {uploadedFile && (
                <Typography component="p" variant="body1">
                  File selected: {uploadedFile.name}
                </Typography>
              )}
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
