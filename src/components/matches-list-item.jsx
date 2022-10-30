import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import format from 'date-fns/format';

const STATUSES = {
  SCHEDULED: 'Запланирован',
  LIVE: 'В прямом эфире',
  IN_PLAY: 'В игре',
  PAUSED: 'Пауза',
  FINISHED: 'Завершен',
  POSTPONED: 'Отложен',
  SUSPENDED: 'Приостановлен',
  CANCELED: 'Отменен',
};

export default function MatchesListItem({ match }) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>
        {format(new Date(match.utcDate), 'dd.MM.yyyy')}
      </TableCell>
      <TableCell align="center">
        {format(new Date(match.utcDate), 'hh:mm')}
      </TableCell>
      <TableCell align="center">
      {STATUSES[match.status]}
      </TableCell>
      <TableCell>
      {match.homeTeam.name}
      &nbsp;&mdash;&nbsp;
      {match.awayTeam.name}
      </TableCell>
      <TableCell align="right">
      {match.score.fullTime.homeTeam && match.score.fullTime.awayTeam ? `${match.score.fullTime.homeTeam} : ${match.score.fullTime.awayTeam}` : null}
      &nbsp;
      {match.score.extraTime.homeTeam && match.score.extraTime.awayTeam ? `(${match.score.extraTime.homeTeam} : ${match.score.extraTime.awayTeam})` : null}
      &nbsp;
      {match.score.penalties.homeTeam && match.score.penalties.awayTeam ? `(${match.score.penalties.homeTeam} : ${match.score.penalties.awayTeam})` : null}
      </TableCell>
    </TableRow>
  );
}