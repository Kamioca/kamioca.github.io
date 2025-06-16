import { Box, Button, Card, CardHeader, Grid } from '@mui/material';

import mp1Image from "../Images/2D/mp1.jpg";
import mp2Image from "../Images/2D/mp2.jpg";
import mp3Image from "../Images/2D/mp3.jpg";
import foodImage from "../Images/2D/save-this-time-pls.jpg";
import axeImage from "../Images/2D/axe.png";
import crownImage from "../Images/2D/Crown.png";
import shrineImage from "../Images/Other/image.png";
import { useNavigate } from 'react-router';

export default function Page_2DArt() {
  const pageStyle = {
    background: 'linear-gradient(to top,rgb(182, 177, 224),rgb(255, 255, 255))',
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    height: "30vh",
    width: "auto"
  };

  function createItemForImage(imageSrc) {
    return <Grid md={4} sm={6} xs={12} item>
            <img style={imageStyle} src={imageSrc}></img>
          </Grid>;
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
        <Grid container spacing={2}>
          <Grid size={12} item>
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
    </div>
  );
}