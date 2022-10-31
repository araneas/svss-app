import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./routes/index";
import Competitions from "./routes/competitions";
import Teams from "./routes/teams";
import LeagueMatches, { loader as leagueMatchesLoader } from "./routes/leagueMatches";
import TeamMatches, { loader as teamMatchesLoader } from "./routes/teamMatches";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Competitions />,
      },
      {
        path: "/competitions/:competitionId/matches",
        element: <LeagueMatches />,
        loader: leagueMatchesLoader,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/teams/:teamId/matches",
        element: <TeamMatches />,
        loader: teamMatchesLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
