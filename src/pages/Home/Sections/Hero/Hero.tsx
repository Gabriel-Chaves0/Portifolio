import { Box, Container, styled, Typography } from "@mui/material";
import Perfil from "../../../../assets/images/Foto_apesentando.jpeg";
import { Grid } from "@mui/material";
import BackupIcon from '@mui/icons-material/Backup';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/styledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";
import Projects from "../Projetos/Projetos";
import React, { useRef } from "react";
//import "./style.css";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "#1C1C1C",
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }));

const StyledImg = styled("img")(({theme}) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Gabriel Chaves cv.pdf"; 
    link.download = "Gabriel Chaves cv.pdf"; 
    link.click();
  };

  const handleContactClick = () => {
    window.location.href = "mailto:g.chaves0110@gmail.com?subject=Contato via Portfólio";
  };

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>

              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0} >
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center" >
                  <StyledImg src={Perfil} />
                </Box>

              </Box>

            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary" variant="h1" textAlign="center" pb={1}>Chaves aqui</Typography>
              <Typography color="secondary.contrastText" variant="h2" textAlign="center" pb={2}>Keep it simple</Typography>

              <Grid container display="flex" justifyContent="center" spacing={3} pt={2}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleDownloadCV}>
                    <BackupIcon/>
                      <Typography>Download CV</Typography>
                  </StyledButton> 
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton  onClick={handleContactClick}>
                    <EmailIcon/>
                    <Typography>Contact</Typography>
                  </StyledButton>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography color="secondary.contrastText" variant="h3" textAlign="center" pt={2}>Desenvolvedor Web FullStack</Typography>
          </Grid>
        </Container>
      </StyledHero>

      <Box id="projects-section" mt={2} width="100%" bgcolor="#1C1C1C" pt={4} pb={4}>
        <Container maxWidth="lg">
          <Projects />
        </Container>
      </Box>
    </>
  );
}

export default Hero;
