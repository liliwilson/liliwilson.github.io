import React from "react";
import {
  Card,
  CardContent,
  CardOverflow,
  AspectRatio,
  Typography,
} from "@mui/joy";

const Position = (props) => {
  return (
    <Card orientation="horizontal" sx={{ width: "90%"}}>
      <CardOverflow sx={{ margin: "0" }}>
        <AspectRatio ratio="1" sx={{ width: 80 }}>
          <img src={`positions/${props.logo}`} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent align="left">
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
        <Typography>{props.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Position;
