import { Box, Button, Grid, IconButton, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Images

import cabinetImage from "../Images/Capstone/cabinet.jpg";
import floorImage from "../Images/Capstone/floor.jpg";
import roomImage from "../Images/Capstone/Room_1.png";
import tableImage from "../Images/Capstone/table.jpg";
import tpImage from "../Images/Capstone/tp.jpg";
import swImage from "../Images/Capstone/sw.jpg";
import { useNavigate } from 'react-router';
import { useState } from 'react';
import YouTube from 'react-youtube';

export default function Page_Capstone() {
  const [imageSelected, setImageSelected] = useState("");
  const [fullImageWindowOpen, setFullImageWindowOpen] = useState(false);

  // Back button
  const backButtonStyle = {
    backgroundColor: "#C5436B",
    color: "white",
    position: "absolute",
    left: "60px",
    top: "40px"
  };
  
  const pageStyle = {
    background: 'linear-gradient(to top,rgb(22, 21, 29),rgb(50, 59, 105))',
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
    return <Grid item sx={imageStyle} size={{ xs: 12, sm: 6, md: 4 }} onClick={() => {onItemSelected(imageSrc)}}>
            <img style={{ width: '100%', height: '100%' }} src={imageSrc}></img>
          </Grid>;
  }

  function onItemSelected(imageSrc) {
    setImageSelected(imageSrc);
    setFullImageWindowOpen(true);
  }

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
          <Grid size={12} item>
            <h1 style={{ fontSize: '60px', color:'white' }} >Capstone Project</h1>
          <Box style={{ height: '5vh' }}></Box>
          </Grid>
          {createItemForImage(cabinetImage)}
          {createItemForImage(floorImage)}
          {createItemForImage(roomImage)}
          {createItemForImage(tableImage)}
          {createItemForImage(tpImage)}
          {createItemForImage(swImage)}
          <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
            <YouTube videoId='x8ccMH5M8NM'/>
          </Grid>
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