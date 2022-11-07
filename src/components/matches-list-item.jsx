import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import format from "date-fns/format";

const STATUSES = {
  SCHEDULED: "Запланирован",
  LIVE: "В прямом эфире",
  IN_PLAY: "В игре",
  PAUSED: "Пауза",
  FINISHED: "Завершен",
  POSTPONED: "Отложен",
  SUSPENDED: "Приостановлен",
  CANCELED: "Отменен",
};

export default function MatchesListItem({ match }) {
  return (
    <TableRow
      sx={{
        "&:first-child td": { border: 2 },
      }}
    >
      <TableCell
        sx={{
          border: 2,
        }}
      >
        {format(new Date(match.utcDate), "dd.MM.yyyy")}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          border: 2,
        }}
      >
        {format(new Date(match.utcDate), "hh:mm")}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          border: 2,
        }}
      >
        {STATUSES[match.status]}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          border: 2,
        }}
      >
        {match.homeTeam.name}
        &nbsp;&mdash;&nbsp;
        {match.awayTeam.name}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          border: 2,
        }}
      >
        {match.score.fullTime.homeTeam && match.score.fullTime.awayTeam
          ? `${match.score.fullTime.homeTeam} : ${match.score.fullTime.awayTeam}`
          : null}
        &nbsp;
        {match.score.extraTime.homeTeam && match.score.extraTime.awayTeam
          ? `(${match.score.extraTime.homeTeam} : ${match.score.extraTime.awayTeam})`
          : null}
        &nbsp;
        {match.score.penalties.homeTeam && match.score.penalties.awayTeam
          ? `(${match.score.penalties.homeTeam} : ${match.score.penalties.awayTeam})`
          : null}
      </TableCell>
    </TableRow>
  );
}
