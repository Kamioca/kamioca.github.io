import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
// Images
import frogImage from "../Images/frog.png";
import uhohaiImage from "../Images/uhohai.png";
import hofImage from "../Images/hof.png";
import wromImage from "../Images/wrom.png";
import { useNavigate } from 'react-router';

export default function Page_Projects() {
  const pageStyle = {
      background: 'linear-gradient(to top,rgb(153, 32, 85),rgb(215, 171, 217))',
    minHeight: '100vh',
    minWidth: "100vw",
    display: "flex",
      justifyContent: "center",
  };

  const projectList = [
    {
      name: "Frogmageddon",
      image: frogImage,
      role: "2D Artist, Animation, Assets",
      desc: "A bullet heaven game where you play as a frog to defend your home. Currently pending a Steam release.",
      link: "https://store.steampowered.com/app/3201190/Frogmageddon/"
    },
    {
      name: "Uh Oh, AI!",
      image: uhohaiImage,
      role: "2D Artist, Animation, Assets",
      desc: "A mobile match three game where you play as an AI Art Student. The game is released on Google Play and the App Store.",
      link: "https://linktr.ee/uhohai"
    },
    {
      name: "Habit of Force",
      image: hofImage,
      role: "3D Artist, Modelling, Textures, Rigging, Animations.",
      desc: "",
      link: "https://jordan-sadprofeso.itch.io/habit-of-force"
    },
    {
      name: "What Remains of Me",
      image: wromImage,
      role: "Assets Facilitator, Assets and Splash Art Artist",
      desc: "",
      link: "https://whatremainsofme.itch.io/what-remains-of-me"
    },
  ];

  const openLinkInNewTab = ( url ) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if ( newTab ) newTab.opener = null;
  }

  function createItemListOfProjects() {
    const projectItemList = [];
    projectList.forEach((projectDict) => {
      projectItemList.push(
        <Grid item>
          <Card sx={{ minWidth: '22vw', minHeight: '26vh', 
                      width: '300px',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: 6, // optional: adds depth on hover
                      }
                   }}>
            <CardHeader 
            title={projectDict.name}
                      subheader={projectDict.role}
                      sx={{fontFamily: "Source Sans Pro"}}
            >
            </CardHeader>
            <CardMedia
                      component="img"
                      height="225"
                      image={projectDict.image}
                      sx={{ cursor: 'pointer' }}
                      onClick={() => { openLinkInNewTab(projectDict.link) }}
                      
            >
            </CardMedia>
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: '4vh', wordWrap: 'break-word' }}>
                {projectDict.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" onClick={() => {openLinkInNewTab(projectDict.link)}}>Link</Button>
            </CardActions>
          </Card>
        </Grid>
      );
    })

    return projectItemList;
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
            <Grid size={12} item>
              <h1 style={{ fontSize: '60px', color:'white' }} >Projects</h1>
            </Grid>
            {createItemListOfProjects()}
        </Grid>
      </Box>
    </div>
  );
}