import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Icon from "@mui/material/Icon";

import format from "date-fns/format";

import MatchesListItem from "../components/matches-list-item";

export async function loader({ params }) {
  return params;
}

const itemsOnPage = 8;

export default function TeamMatches() {
  const { teamId } = useLoaderData();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [team, setTeam] = useState({});
  const [matches, setMatches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const count = matches.length;
  const numPages = Math.round(count / itemsOnPage);
  const matchesPagedListStart = (currentPage - 1) * itemsOnPage;
  const matchesPaged = matches.slice(
    matchesPagedListStart,
    matchesPagedListStart + itemsOnPage
  );

  const handleChange = (value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setLoading(true);
    const dateFrom = startDate
      ? `dateFrom=${format(startDate, "yyyy-MM-dd")}`
      : null;
    const dateTo = endDate ? `dateTo=${format(endDate, "yyyy-MM-dd")}` : null;

    const query = dateFrom && dateTo ? [dateFrom, dateTo].join("&") : "";

    fetch(`https://api.football-data.org/v2/teams/${teamId}/matches?${query}`, {
      headers: {
        "X-Auth-Token": "41a08e4eeaf8433abcc9bac537ac1fe0",
      },
      mode: "cors",
    })
      .then((resp) => {
        if (!resp.ok) {
          setError(true);
          throw new Error("server sent error");
        }
        return resp;
      })
      .then((resp) => resp.json())
      .then(({ matches, team }) => {
        setMatches(matches);
        setTeam(team);
      })
      .catch(() => {
        console.log("err");
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [startDate, endDate]);

  if (error) {
    return (
      <Grid container spacing={2} sx={{ pt: 5, pb: 5 }}>
        <Grid item xs={12}>
          <Icon
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              zIndex: 9,
              color: "red",
              fontSize: "50px !important",
            }}
          >
            error
          </Icon>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} sx={{ pt: 5, pb: 5 }}>
      {loading ? (
        <Grid item xs={12}>
          <CircularProgress
            sx={{ position: "absolute", left: "50%", top: "50%", zIndex: 9 }}
          />
        </Grid>
      ) : null}
      <Grid item xs={12}>
        <Link to="/">Команды</Link>
      </Grid>

      <Grid item xs={12}>
        <h2>Матчи</h2>
      </Grid>

      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <DesktopDatePicker
                label="С"
                inputFormat="dd.MM.yyyy"
                value={startDate}
                onChange={setStartDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item xs={3}>
              <DesktopDatePicker
                label="По"
                inputFormat="dd.MM.yyyy"
                value={endDate}
                onChange={setEndDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Grid>

      <Grid item xs={4} sm={6} md={12}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell align="center">Время</TableCell>
              <TableCell align="center">Статус матча</TableCell>
              <TableCell align="center">Команды</TableCell>
              <TableCell align="center">Счет</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchesPaged.map((item) => (
              <MatchesListItem key={item.id} match={item} />
            ))}
          </TableBody>
        </Table>
      </Grid>

      <Grid item xs={12}>
        <Stack spacing={2}>
          <Pagination count={numPages} onChange={handleChange} />
        </Stack>
      </Grid>
    </Grid>
  );
}
