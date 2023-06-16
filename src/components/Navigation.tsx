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
    <div className="part1 w-50 d-inline-block">
      <img src="logo_adiona.png" alt="Logo adiona" className="logo" />
    </div>
    <div className="part2 w-50 d-inline-block">
      part2
    </div>
      <nav className="navbar navbar-light bg-light">
        <img src="logo_adiona.png" alt="Logo adiona" className="logo" />

        <div className="navbar" id="navbarNav">
          <ul className="navbar_items nav">
            <a href="#vuelos" className="nav-link">
              Flight
            </a>
            <a href="#hoteles" className="nav-link">
              Hotels
            </a>
            <a href="#cruceros" className="nav-link">
              Cruises
            </a>
            <a href="#autos" className="nav-link">
              Car Rental
            </a>
            <a href="#tours" className="nav-link">
              Tours
            </a>
			<Link to={account? "/Recompensas" : "/Principal"} className="nav-link">
              Rewards
            </Link>
            <Link to={account? "/Perfil" : "/Principal"} className="nav-link">
              Profile
            </Link>
          </ul>
          <Account />
        </div>
      </nav>
      <Carousel />
	  <p id="vuelos"/>
      <Vuelos />
	  <p id="hoteles"/>
      <Hoteles />
	  <p id="cruceros"/>
      <Cruceros />
	  <p id="autos"/>
      <Autos />
	  <p id="tours"/>
      <Tours />
    </>
  );
}
export { Navigation };
