import { Link } from "react-router-dom";
import { Carousel } from "./Carousel";
import { Vuelos } from "./Vuelos";
import { Hoteles } from "./Hoteles";
import { Cruceros } from "./Cruceros";
import { Autos } from "./Autos";
import { Tours } from "./Tours";
import { Ofertas } from "./Ofertas";
import { Account } from "./layout/header/account/Account";

function Navigation (){
        return(
            <>
            <nav className='navbar navbar-light bg-light'>
                <img src="logo_adiona.png" alt="Logo adiona" className="logo"/>
                
                <div className="navbar" id="navbarNav">
                    <ul className="navbar_items nav">
                        <Link to="/Vuelos" className="nav-link">Vuelos</Link>
                        <Link to="/Hoteles" className="nav-link">Hoteles</Link>
                        <Link to="/Cruceros" className="nav-link">Cruceros</Link>
                        <Link to="/Autos" className="nav-link">Autos</Link>
                        <Link to="/Tours" className="nav-link">Tours</Link>
                        <Link to="/Perfil" className="nav-link">Perfil</Link>
                    </ul>
                    <Account/>
                </div>
            </nav>
            <Carousel/>
            <Vuelos/>
            <Hoteles/>
            <Cruceros/>
            <Autos/>
            <Tours/>
            <Ofertas/>
            </>
        )
    }

export { Navigation };
