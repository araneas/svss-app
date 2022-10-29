import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Flag from 'react-world-flags';
import { Link } from "react-router-dom";

export const CompetitionCard = ({ competition }) => (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
        {competition.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" className="country-info-wrapper">
        <Flag className="country-flag" height="36" width="54" code={competition.area.countryCode} fallback={ <span className="country-flag">{competition.area.countryCode}</span> }/>
        <span>{competition.area.name}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/competitions/${competition.id}/matches`}>
        <Typography color="primary">
          Подробнее
        </Typography>
      </Link>
    </CardActions>
  </React.Fragment>
);