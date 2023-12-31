import React from "react";
import {
  Card,
  CardContent,
  CardOverflow,
  AspectRatio,
  Typography,
  Box,
} from "@mui/joy";
import LinkIcon from "@mui/icons-material/Link";

const Position = (props) => {
  return (
    <Card orientation="horizontal" sx={{ width: "90%" }}>
      <CardOverflow sx={{ margin: "0" }}>
        <AspectRatio ratio="1" sx={{ width: 80 }}>
          <img
            src={process.env.PUBLIC_URL + `/positions/${props.logo}`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent align="left">
        <Box display="flex">
          <Typography level="h2" fontSize="lg" textColor="#000" mb={1}>
            {props.position} •{" "}
            <Typography
              level="h3"
              fontStyle={"italic"}
              fontSize="lg"
              textColor="#000"
              mb={1}
            >
              {props.place}
            </Typography>
          </Typography>
          <a
            href={props.link}
            rel="noreferrer"
            target="_blank"
            style={{ color: "black", paddingLeft: "0.5em" }}
          >
            <LinkIcon />
          </a>
        </Box>

        <Typography>{props.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Position;
