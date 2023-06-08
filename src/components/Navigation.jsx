import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

class Navigation extends Component{
    render(){
        return(
            <>
            <nav className='navbar navbar-light bg-light'>
                <img src="logo_adiona.png" className="logo"/>
                
                <div className="navbar" id="navbarNav">
                    <ul className="navbar_items nav">
                        <Link to="/Vuelos" className="nav-link">Vuelos</Link>
                        <Link Link to="/Hoteles" className="nav-link">Hoteles</Link>
                        <Link Link to="/Cruceros" className="nav-link">Cruceros</Link>
                        <Link Link to="/Autos" className="nav-link">Autos</Link>
                        <Link Link to="/Tours" className="nav-link">Tours</Link>
                        <Link Link to="/Ofertas" className="nav-link">Ofertas</Link>
                    </ul>
                </div>

                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="Options">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Option1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Option2</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="#">Option3</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Carousel/>
            </>
            )
    }
}

export default Navigation;