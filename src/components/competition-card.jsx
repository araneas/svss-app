import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Flag from "react-world-flags";
import { Link } from "react-router-dom";
import football from "./football.jpg";
import Box from "@mui/material/Box";

const myHover = {
  "&:hover": {
    border: "1px solid black",
    opacity: 0.7,
  },
};

export const CompetitionCard = ({ competition }) => (
  <Box sx={myHover}>
    <CardContent
      sx={{ height: "150px", borderRadius: "3px" }}
      style={{ backgroundImage: `url(${football})` }}
    >
      <Link to={`/competitions/${competition.id}/matches`}>
        <Typography
          align="center"
          variant="h5"
          component="div"
          sx={{ mb: 1, color: "text.primary", fontWeight: "bold" }}
        >
          {competition.name}
        </Typography>
        <Typography align="center" variant="h6" sx={{ color: "text.primary" }}>
          <Flag
            className="country-flag"
            height="25%"
            width="25%"
            align="center"
            code={competition.area.countryCode}
            fallback={
              <span className="country-flag">
                {competition.area.countryCode}
              </span>
            }
          />
          <span>{competition.area.name}</span>
        </Typography>
      </Link>
    </CardContent>
  </Box>
);
