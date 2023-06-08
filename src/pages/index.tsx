import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navigation } from '../components/Navigation';
import { Login } from '../components/Login';

function Routing() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Principal" element={<Navigation/>} />
        </Routes>
      </div>
  );
}

export { Routing };