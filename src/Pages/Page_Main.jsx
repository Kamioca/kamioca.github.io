import { Button, Card, CardHeader, Grid, Stack, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Images
import mainBackground from "../Images/bg3.png";
import linkedinImage from "../Images/Logos/LinkedIn_logo.png";
import artstationImage from "../Images/Logos/Artstation_Logo.png";

// PDF
import ResumePDF from "../Resume/Resume Novmber 2024.pdf";

export default function Page_Main() {
  const pageStyle = {
    backgroundImage: `url(${mainBackground})`, 
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const buttonStyle = {
    backgroundColor: "#C5436B",
    color: "white"
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
    <div style={pageStyle}>
      <Grid container>
          <Grid size={12} item>
            <h1 style={{ fontSize: '60px' }} >My Portfolio</h1>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onPageClick("/Projects"); }} >Projects</Button>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onPageClick("/Animations"); }} >Animations</Button>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onPageClick("/Capstone"); }} >Capstone Project</Button>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onPageClick("/2DArt"); }} >2D</Button>
              <Button variant="contained" size="large" style={buttonStyle} onClick={() => { onResumeClick(); }} >Resume</Button>
                  </Stack>
                  <Box style={{ height: "2vh" }} ></Box>
                  <Stack direction="row" spacing={2}>
                      <Button variant="text" size="small" style={{ display: "flex", flexDirection: "column" }} onClick={() => { openLinkInNewTab("https://www.linkedin.com/in/byung-hun-lee/"); }}>
                          <img src={linkedinImage} width="35" alt="linkedin" />
                      </Button>
                      <Button variant="text" size="small" style={{ display: "flex", flexDirection: "column" }} onClick={() => { openLinkInNewTab("https://www.artstation.com/ariska/"); }}>
                          <img src={artstationImage} width="35" alt="artstation" />
                      </Button>
                  </Stack>
          </Grid>
      </Grid>
    </div>
  );
}
