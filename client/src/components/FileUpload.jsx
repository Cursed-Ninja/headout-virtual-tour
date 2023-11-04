import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FileUpload = ({ uploadedFile, setUploadedFile, fileType }) => {
  const onDrop = (acceptedFiles) => {
    setUploadedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
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
          Drag 'n' drop a {fileType} file here, or click to select one.
        </Typography>
      </Box>

      {uploadedFile && (
        <Typography component="p" variant="body1">
          File selected: {uploadedFile.name}
        </Typography>
      )}
    </>
  );
};

export default FileUpload;
