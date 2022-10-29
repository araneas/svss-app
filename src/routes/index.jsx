import { Outlet, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Index() {
  return (
    <>
    <CssBaseline />
    <Container maxWidth="lg">
      <Box sx={{ height: '100vh' }}>
        <Grid container spacing={2} className="header">
          <Grid item xs={2} className="logo">
            <img src="https://www.football-data.org/assets/logo.jpg" alt="" />
          </Grid>
          <Grid item xs={10} className="navigation">
        <nav className="navigation">
          <ul>
            <li>
              <Link to={'/competitions'}>Лиги</Link>
            </li>
            <li>
              <Link to={'/teams'}>Команды</Link>
            </li>
          </ul>
        </nav>
        </Grid>
        </Grid>

      <main>
        <Outlet />
      </main>
      </Box>
    </Container>
    </>
  );
}