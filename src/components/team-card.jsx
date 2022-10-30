import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

export const TeamCard = ({ team}) => (
  <React.Fragment>
    <CardContent>
      <CardMedia 
                        component="img"
                        alt="Герб клуба"
                        src={team.crestUrl}
                        sx={{ height: '1vm', pb: "10px" }}
                    />
      <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
        {team.name}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/teams/${team.id}/matches-teams`}>
        <Typography color="primary">
          Подробнее
        </Typography>
      </Link>
    </CardActions>
  </React.Fragment>
);