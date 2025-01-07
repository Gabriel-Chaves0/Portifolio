import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Projects = () => {
  
  const projects = [
    { title: "Projeto 1", description: "Descrição do projeto 1" },
    { title: "Projeto 2", description: "Descrição do projeto 2" },
    { title: "Projeto 3", description: "Descrição do projeto 3" },
  ];

  return (
    <Box mt={4}>
      <Typography variant="h4" color="primary" textAlign="center" pb={2}>
        Meus Projetos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" color="textPrimary">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
