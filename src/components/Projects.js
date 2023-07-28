import React from "react";
import { Grid, Typography } from "@mui/material";

import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json";

const Projects = () => {
  const projectCards = projects.map((project) => {
    return (
      <Grid item md={4} sm={6} xs={12}>
        <ProjectCard {...project} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={4} color="white" height="100%" overflow="auto">
      <Grid item xs={12}>
        <Typography variant="h4" fontSize="md" align="left">
          and here are some things I've made...
        </Typography>
      </Grid>
      {projectCards}
    </Grid>
  );
};

export default Projects;
