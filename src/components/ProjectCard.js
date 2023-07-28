import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardCover,
  CardActions,
  Typography,
} from "@mui/joy";

import GitHubIcon from "@mui/icons-material/GitHub";
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import "./ProjectCard.css";

// props expected:
// name: string
// description: string
// list of technology: list of strings
// image: filepath
const ProjectCard = (props) => {
  const [flipped, setFlipped] = useState(false); // if true, cover up, else, description

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div onClick={toggleFlip} className={`card ${flipped ? "flip" : ""}`}>
      <Card
        sx={{ height: "25vh", position: "absolute", width: "90%" }}
        className={`card-front`}
      >
        <CardCover>
          {props.image && <img src={`projects/${props.image}`} loading="lazy" alt="" />}
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(255,255,255,.9), rgba(255,255,255,0) 200px), linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0) 200px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="h2" fontSize="lg" textColor="#000" mb={1}>
            {props.name}
          </Typography>
          <Typography textColor="neutral.500" fontSize="xs">
            {props.tech.join(" • ")}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ height: "25vh", width: "90%", overflow: 'auto'}} className={`card-back`}>
        <CardContent sx={{ justifyContent: "center" }}>
          <Typography fontSize="sm" textColor="#000" mb={1}>
            {props.description}
          </Typography>
        </CardContent>

        {props.link && (
          <CardActions sx={{ justifyContent: "center" }}>
            <a href={props.link} rel="noreferrer" target="_blank">
              <GitHubIcon color="secondary" />
            </a>
            {props.paper && (
            <a href={props.paper} rel="noreferrer" target="_blank">
              <BookmarksIcon color="secondary" />
            </a>
        )}
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default ProjectCard;
