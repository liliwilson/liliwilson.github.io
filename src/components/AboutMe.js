import React from "react";
import { Grid, Typography, Hidden } from "@mui/material";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <Grid container spacing={4} color="white" height="100%" overflow="auto">
      <Grid item xs={12}>
        <Typography variant="h3" fontSize="md" align="left">
          Hi! I'm <strong>Lili Wilson</strong>...
        </Typography>
      </Grid>
      <Hidden smUp>
        <Grid item xs={2} />
      </Hidden>
      <Grid item md={3} xs={8}>
        <img src={"lili.jpg"} alt="" width="100%" padding="auto" />
      </Grid>
      <Hidden smUp>
        <Grid item xs={2} />
      </Hidden>
      <Grid item sm={9} xs={12} className="about-text" align="left">
        I'm a second-year computer science student at MIT. I'm interested in
        accessible machine learning, computer systems, and AI ethics + policy. I
        also love to teach!
        <br />
        <br />
        I'm currently working as an undergraduate researcher at{" "}
        <a href="https://madry-lab.ml/" rel="noreferrer" target="_blank">
          MadryLab
        </a>
        , a part of MIT CSAIL. Prior to that, I worked as a software engineer
        intern at{" "}
        <a href="https://www.govividly.com/" rel="noreferrer" target="_blank">
          Vividly (formerly Cresicor)
        </a>{" "}
        and conducted CS + neuroscience research with the{" "}
        <a
          href="https://www.metaconscious.org/"
          rel="noreferrer"
          target="_blank"
        >
          MetaConscious Group
        </a>
        .
        <br />
        <br />
        On campus, I co-direct{" "}
        <a href="https://hackmit.org" rel="noreferrer" target="_blank">
          HackMIT
        </a>{" "}
        and play{" "}
        <a
          href="https://scripts.mit.edu/~womens-ult/"
          rel="noreferrer"
          target="_blank"
        >
          ultimate
        </a>{" "}
        <a href="https://siegeultimate.com/" rel="noreferrer" target="_blank">
          frisbee
        </a>
        .
        <br />
        <br />
        Feel free to reach out: lmwilson [at] mit [dot] edu
      </Grid>
      <Grid item />
    </Grid>
  );
};

export default AboutMe;
