import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Avatar from "@mui/material/Avatar";

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

export default function Index() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <CssBaseline />
      <Box sx={{ bgcolor: "warning.main" }}>
        <Grid container spacing={2} className="header">
          <Grid item xs={1} margin="10px">
            <Avatar alt="" src="/ball.jpg" />
          </Grid>
          <Grid item xs={10} className="navigation">
            <nav className="navigation">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
              >
                <LinkTab
                  sx={{ color: "text.main", fontSize: 20, fontWeight: "bold" }}
                  label="Лиги"
                  to={"/"}
                />
                <LinkTab
                  sx={{ color: "text.main", fontSize: 20, fontWeight: "bold" }}
                  label="Команды"
                  to={"/teams"}
                />
              </Tabs>
            </nav>
          </Grid>
        </Grid>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <main>
            <Outlet />
          </main>
        </Box>
      </Container>
    </>
  );
}
