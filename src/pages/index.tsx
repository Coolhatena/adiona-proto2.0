import { Route, Routes } from "react-router-dom";
import './App.css';
import { Recompensas } from "components/Recompensas";
import { Navigation } from '../components/Navigation';
import { Login } from '../components/Login';
import { Perfil } from '../components/Perfil';
import { Flights } from '../components/Flights';

function Routing() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Principal" element={<Navigation/>} />
		      <Route path="/Recompensas" element={<Recompensas/>} />
          <Route path="/Perfil" element={<Perfil/>} />
          <Route path="/Flights" element={<Flights/>} />
        </Routes>
      </div>
  );
}

export { Routing };