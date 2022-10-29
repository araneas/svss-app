import { Routes, Route } from 'react-router-dom';


import Index from "./routes/index";
import Competitions from "./routes/competitions";
import Teams from "./routes/teams";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Index /> }>
        <Route path="/" element={ <Competitions /> } />
        <Route path="teams" element={ <Teams /> } />
      </Route>
    </Routes>
  );
}

export default App;
