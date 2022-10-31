import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import { TeamCard } from '../components/team-card';

const itemsOnPage = 10;
export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchString] = useState('');

  const teamsFiltered = teams.filter(item => item.name.match(new RegExp(searchString, 'ig')));
  const count = teamsFiltered.length;
  const numPages = Math.round(count / itemsOnPage);
  const teamsPagedListStart = (currentPage - 1) * itemsOnPage;
  const teamsPaged = teamsFiltered.slice(teamsPagedListStart, teamsPagedListStart + itemsOnPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetch('http://api.football-data.org/v2/teams/', {
      headers: {
        'X-Auth-Token': '41a08e4eeaf8433abcc9bac537ac1fe0',
      },
      mode: 'cors',
    })
      .then(resp => resp.json())
      .then(({ teams}) => {
        console.log(teams);
        setTeams(teams);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ pt: 5, pb: 15 }}>
      {teamsPaged.map(item => (
        <Grid key={item.id} item xs={2} margin={2}>
          <Card variant="outlined">
            <TeamCard team={item} /></Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Stack spacing={2}>
          <Pagination count={numPages} onChange={handleChange} />
        </Stack>
      </Grid>
    </Grid>
  );
}