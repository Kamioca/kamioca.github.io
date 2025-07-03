import { Box, Button, Dialog, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import mp1Image from "../Images/2D/mp1.jpg";
import mp2Image from "../Images/2D/mp2.jpg";
import mp3Image from "../Images/2D/mp3.jpg";
import foodImage from "../Images/2D/save-this-time-pls.jpg";
import axeImage from "../Images/2D/axe.png";
import crownImage from "../Images/2D/Crown.png";
import shrineImage from "../Images/Other/image.png";
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Page_2DArt() {
  const [imageSelected, setImageSelected] = useState("");
  const [fullImageWindowOpen, setFullImageWindowOpen] = useState(false);

  const pageStyle = {
    background: 'linear-gradient(to top,rgb(182, 177, 224),rgb(255, 255, 255))',
    minHeight: '100vh',
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "auto",
    maxWidth: '300px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: 6, // optional: adds depth on hover
    },
    cursor: 'pointer'
  };

  function createItemForImage(imageSrc) {
    return <Grid item sx={imageStyle} size={{ xs: 12, sm: 6, md: 4 }} onClick={() => {onItemSelected(imageSrc)}} >
            <img style={{ width: '100%', height: '100%' }} src={imageSrc}></img>
           </Grid>;
  }

  function onItemSelected(imageSrc) {
    setImageSelected(imageSrc);
    setFullImageWindowOpen(true);
  }

  // Back button
  const backButtonStyle = {
    backgroundColor: "#C5436B",
    color: "white",
    position: "absolute",
    left: "60px",
    top: "40px"
  };

  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/");
  };

  return (
    <div style={pageStyle}>
      <Button variant="contained" size="large" style={backButtonStyle} onClick={onBackClick}>Home</Button>
      <Box px={5}>
        {/* The box below is for adjusting the offset between the title and the top of the page. This offset is specifically to avoid home overlapping with the title on mobile */}
        <Box style={{ height: '30px' }}/>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item size={12}>
            <h1 style={{ fontSize: '60px' }} >2D Art</h1>
          <Box style={{ height: '5vh' }}></Box>
          </Grid>
          {createItemForImage(mp1Image)}
          {createItemForImage(mp2Image)}
          {createItemForImage(mp3Image)}
          {createItemForImage(axeImage)}
          {createItemForImage(crownImage)}
          {createItemForImage(shrineImage)}
          {createItemForImage(foodImage)}
        </Grid>
      </Box>
      {/* Fullscreen image dialogue*/}
      <Dialog fullScreen open={fullImageWindowOpen} onClose={() => setFullImageWindowOpen(false)}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={() => setFullImageWindowOpen(false)}
            sx={{ position: 'absolute', top: 16, right: 16, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>

          {/* Full image */}
          <img
            src={imageSelected}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Box>
      </Dialog>
    </div>
  );
}