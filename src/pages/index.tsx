import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navigation } from '../components/Navigation';
import { Login } from '../components/Login';
import { Perfil } from '../components/Perfil';

function Routing() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Principal" element={<Navigation/>} />
          <Route path="/Perfil" element={<Perfil/>} />
        </Routes>
      </div>
  );
}

export { Routing };