import { Link } from "react-router-dom";
import { useAccount } from "@gear-js/react-hooks";
import { Carousel } from "./Carousel";
import { Vuelos } from "./Vuelos";
import { Hoteles } from "./Hoteles";
import { Cruceros } from "./Cruceros";
import { Autos } from "./Autos";
import { Tours } from "./Tours";
import { Account } from "./layout/header/account/Account";

function Navigation() {
	const { account, accounts } = useAccount();

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <img src="logo_adiona.png" alt="Logo adiona" className="logo" />

        <div className="navbar" id="navbarNav">
          <ul className="navbar_items nav">
            <Link to="/Vuelos" className="nav-link">
              Flight
            </Link>
            <Link to="/Hoteles" className="nav-link">
              Hotels
            </Link>
            <Link to="/Cruceros" className="nav-link">
              Cruises
            </Link>
            <Link to="/Autos" className="nav-link">
              Car Rental
            </Link>
            <Link to="/Tours" className="nav-link">
              Tours
            </Link>
            <Link to={account? "/Perfil" : "/Principal"} className="nav-link">
              Profile
            </Link>
          </ul>
          <Account />
        </div>
      </nav>
      <Carousel />
      <Vuelos />
      <Hoteles />
      <Cruceros />
      <Autos />
      <Tours />
    </>
  );
}
export { Navigation };
