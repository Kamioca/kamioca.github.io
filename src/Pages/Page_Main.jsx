import { Button, Card, CardHeader, Grid, Stack, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Images
import mainBackground from "../Images/bg3.png";
import linkedinImage from "../Images/Logos/LinkedIn_logo.png";
import artstationImage from "../Images/Logos/Artstation_Logo.png";

import font from "../Font/SourceSans3.ttf";
// PDF
import ResumePDF from "../Resume/September Resume.pdf";

export default function Page_Main() {
  const pageStyle = {
    backgroundImage: `url(${mainBackground})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
      alignItems: "center",

  };

  const buttonStyle = {
    backgroundColor: "#C5436B",
      color: "white",
      fontFamily: "Source Sans Pro",
  };

  const navigate = useNavigate();

  const onPageClick = (pagePath) => {
    navigate(pagePath);
  };

  const onResumeClick = () => {
    window.open(ResumePDF);
  }

  const openLinkInNewTab = ( url ) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if ( newTab ) newTab.opener = null;
  }

  return (
    <div style={pageStyle} font={font}>
      <Grid container>
          <Grid size={12} item>
                  <h1 style={{ fontSize: '60px', color: '#2C2A24', bottom:'-30px', position: 'relative' }} >Byung Hun Lee</h1>
                  <h2 style={{ fontSize: '30px', color: '#2C2A23'}} > Game Artist & Animator 2D/3D Artist </h2>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onPageClick("/Projects"); }} >Projects</Button>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onPageClick("/Animations"); }} >Animations</Button>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onPageClick("/Capstone"); }} >Capstone Project</Button>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onPageClick("/2DArt"); }} >2D</Button>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onResumeClick(); }} >Resume</Button>
            </Stack>
          </Grid>
      </Grid>
    </div>
  );
}
