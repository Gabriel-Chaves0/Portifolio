import { Container, styled, Typography } from "@mui/material";
import Perfil from "../../../../assets/images/Foto_apesentando.jpeg";
import { Grid } from "@mui/material";
import BackupIcon from '@mui/icons-material/Backup';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/styledButton";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "#1C1C1C",
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }));

const StyledImg = styled("img")(({theme}) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <StyledImg src={Perfil} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary" variant="h1" textAlign="center">Chaves aqui</Typography>
              <Typography color="secondary.contrastText" variant="h2" textAlign="center">Keep it simple</Typography>
              <Grid container display="flex" justifyContent="center">

                <Grid item xs={12} md={3} display="flex" justifyContent="center">
                  <StyledButton>
                    <BackupIcon/>
                      <Typography>Download CV</Typography>
                  </StyledButton> 
                </Grid>
                <Grid item xs={12} md={3} display="flex" justifyContent="center">
                  <StyledButton>
                    <EmailIcon/>
                    <Typography>Contact</Typography>
                  </StyledButton>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
