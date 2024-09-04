import { Container, styled, Typography } from "@mui/material";
import Perfil from "../../../../assets/images/Foto_apesentando.jpeg";
import { Grid } from "@mui/material";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <StyledImg src={Perfil} />
            </Grid>
            <Grid item xs={8}>
              <Typography color="primary" variant="h1">Chaves aqui</Typography>
              <Typography color="white" variant="h2">Keep it simple</Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
