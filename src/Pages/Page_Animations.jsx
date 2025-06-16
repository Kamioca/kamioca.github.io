import { Box, Button, Card, CardHeader, Grid } from '@mui/material';

import artie1Gif from "../Images/Animations/IMG_0112.gif";
import artie2Gif from "../Images/Animations/GifMerge_1500x2049-ezgif.com-crop (1).gif";
import frogGif from "../Images/Animations/Frog.gif";
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router';

export default function Page_Animations() {
  const pageStyle = {
    background: 'linear-gradient(to top,rgb(22, 21, 29),rgb(50, 59, 105))',
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
            <h1 style={{ fontSize: '60px', color:'white' }} >Animations</h1>
          <Box style={{ height: '5vh' }}></Box>
          </Grid>
          {createItemForImage(artie1Gif)}
          {createItemForImage(artie2Gif)}
          {createItemForImage(frogGif)}
        </Grid>
        <Box style={{ height: '10vh' }}></Box>
        <Grid container spacing={2}>
          <Grid md={4} sm={6} xs={12} item>
            <YouTube videoId='/8QI-J5gShUA'/>
          </Grid>
          <Grid md={4} sm={6} xs={12} item>
            <YouTube videoId='/Mw2Lss19oY4'/>
          </Grid>
          <Grid md={4} sm={6} xs={12} item>
            <YouTube videoId='/rHTmPo_1JmY'/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}