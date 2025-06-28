import { Box, Button, Card, CardHeader, Grid } from '@mui/material';

// Images

import cabinetImage from "../Images/Capstone/cabinet.jpg";
import floorImage from "../Images/Capstone/floor.jpg";
import roomImage from "../Images/Capstone/Room_1.png";
import tableImage from "../Images/Capstone/table.jpg";
import tpImage from "../Images/Capstone/tp.jpg";
import swImage from "../Images/Capstone/sw.jpg";
import { useNavigate } from 'react-router';

export default function Page_Capstone() {
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
        </Grid>
      </Box>
    </div>
  );
}