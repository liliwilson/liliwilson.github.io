import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";
import "./ProjectCard.css";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ProjectCard = (props) => {
  // props expected:
  // name: string
  // description: string
  // list of technology: list of strings
  // image: filepath

  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent>
        <Grid container spacing={2} className="card-container">
          <Grid item xs={8}>
            <Img src={props.image} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            
            {/* <Typography variant="body2">{props.description}</Typography> */}
          </Grid>
        </Grid>

        <Typography
              sx={{ fontSize: 14, m: "0.5rem 0 0 0" }}
              color="text.secondary"
            >
              {props.tech.join(" • ")}
          </Typography>
      </CardContent>

      {/* {props.image && (
        <CardMedia
          sx={{ height: 140 }}
          image={props.image}
          title="project image"
        />
      )} */}

      {/* <CardActions>
        <a href={props.link} rel="noreferrer" target="_blank">
          <GitHubIcon color="primary" />
        </a>
      </CardActions> */}
    </Card>
  );
};

export default ProjectCard;
