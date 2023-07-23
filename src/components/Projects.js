import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Projects.css";

import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json";

const Projects = () => {
  const projectCards = projects.map((project) => {
    return (
      <Grid item xs={6}>
        <ProjectCard {...project} />
      </Grid>
    );
  });

  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        projects.
      </Typography>
      <Grid container spacing={4}>
        {projectCards}
      </Grid>
    </div>
  );
};

export default Projects;
