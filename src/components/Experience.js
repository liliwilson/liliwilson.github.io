import React from "react";
import { Grid, Typography } from "@mui/material";

import Position from "./Position";
import positions from "./data/positions.json";

const Experience = () => {
  const positionCards = positions.map((position) => {
    return (
      <Grid item xs={12}>
        <Position {...position} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Typography variant="h4" fontSize="md" fontFamily="Rubik"  align="left" color="white">
          here are some things i've done recently...
        </Typography>
      </Grid>
      {positionCards}
    </Grid>
  );
};

export default Experience;
