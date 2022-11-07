import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import football from "./football2.jpg";

const myHover = {
  "&:hover": {
    border: "1px solid black",
    opacity: 0.7,
  },
};

export const TeamCard = ({ team }) => (
  <Box sx={myHover}>
    <CardContent
      sx={{ height: "300px", borderRadius: "3px" }}
      style={{ backgroundImage: `url(${football})` }}
    >
      <Link to={`/teams/${team.id}/matches`}>
        <CardMedia
          component="img"
          alt="Герб клуба"
          src={team.crestUrl}
          sx={{
            height: "1vm",
            pb: "10px",
            color: "text.main",
          }}
        />
        <Typography
          align="center"
          variant="h6"
          sx={{ mb: 1.5, color: "text.primary", fontWeight: "bold" }}
        >
          {team.name}
        </Typography>
      </Link>
    </CardContent>
  </Box>
);
