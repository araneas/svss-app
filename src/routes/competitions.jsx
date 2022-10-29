import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';

import { CompetitionCard } from '../components/competition-card';


const itemsOnPage= 9;

export default function Competitions() {
  const [competitions, setCompetitions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchString, setSearchString] = useState('');

  const competitionsFiltered = competitions.filter(item => item.name.match(new RegExp(searchString, 'ig')));
  const count = competitionsFiltered.length;
  const numPages = Math.round(count / itemsOnPage);
  const competitionsPagedListStart = (currentPage - 1) * itemsOnPage;
  const competitionsPaged = competitionsFiltered.slice(competitionsPagedListStart, competitionsPagedListStart + itemsOnPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchString(value);
  }

  useEffect(() => {
    fetch('http://api.football-data.org/v2/competitions/', {
      headers: {
        'X-Auth-Token': '41a08e4eeaf8433abcc9bac537ac1fe0',
      },
      mode: 'cors',
    })
      .then(resp => resp.json())
      .then(({ competitions }) => {
        console.log(competitions);
        setCompetitions(competitions);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ pt: 5, pb: 5 }}>
      <Grid item xs={12}>
        <TextField
          label="Поиск"
          variant="outlined"
          value={searchString}
          onChange={handleSearchChange}
        />
      </Grid>

      {competitionsPaged.map(item => (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CompetitionCard competition={item} /></Card>
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