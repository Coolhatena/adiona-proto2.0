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
    <div className="bienvenida d-flex flex-row">
      <div className="part1 w-50 bd-highlight">

        <div className="nav-logo">
          <img src="logo_adiona.png" alt="Logo adiona" className="logo" />
        </div>

        <div className="slogan_principal">
          <h1>Atrevete</h1>
          <h3>a visitar nuevos lugares</h3>
        </div>

      </div>

      <div className="part2 w-50 bd-highlight">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/#" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="/#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                  <button id="dropdownNavbarLink" type='button' data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    Reservaciones 
                    <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
    
                  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="/#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</a>
                      </li>
                      <li>
                        <a href="/#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Rewards</a>
                </li>
                <li>
                  <a href="/#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Carousel />
      </div>
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
