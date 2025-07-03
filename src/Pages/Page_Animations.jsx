import { Box, Button, Card, CardHeader, Grid } from '@mui/material';

import artie1Gif from "../Images/Animations/IMG_0112.gif";
import artie2Gif from "../Images/Animations/GifMerge_1500x2049-ezgif.com-crop (1).gif";
import frogGif from "../Images/Animations/Frog.gif";
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router';

export default function Page_Animations() {
  const pageStyle = {
    background: 'linear-gradient(to top,rgb(22, 21, 29),rgb(50, 59, 105))',
    minHeight: '100vh',
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    height: "30vh",
    width: "auto"
  };

  function createItemForImage(imageSrc) {
    return <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
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
        {/* The box below is for adjusting the offset between the title and the top of the page. This offset is specifically to avoid home overlapping with the title on mobile */}
        <Box style={{ height: '30px' }}/>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item size={12}>
            <h1 style={{ fontSize: '60px', color:'white' }} >Animations</h1>
          <Box style={{ height: '5vh' }}></Box>
          </Grid>
          {createItemForImage(artie1Gif)}
          {createItemForImage(artie2Gif)}
          {createItemForImage(frogGif)}
        </Grid>
        <Box style={{ height: '10vh' }}></Box>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <YouTube videoId='8QI-J5gShUA'/>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <YouTube videoId='Mw2Lss19oY4'/>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <YouTube videoId='rHTmPo_1JmY'/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}