import React from "react";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialBar = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={1}>
      <Grid item>
        <a
          href="https://github.com/liliwilson"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon fontSize="large"/>
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://linkedin.com/in/lili-m-wilson"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon fontSize="large"/>
        </a>
      </Grid>
    </Grid>
  );
};

export default SocialBar;
