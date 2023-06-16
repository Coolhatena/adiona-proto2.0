import { useAccount } from "@gear-js/react-hooks";
import { Carousel } from "./Carousel";
import { Account } from "./layout/header/account/Account";
import { Opiniones } from "./Opiniones";

function Navigation() {
	const { account, accounts } = useAccount();

  return (
  <>
    <div className="bienvenida d-flex flex-row">
      <div className="part1 w-50 bd-highlight">

        <div className="nav-logo">
          <img src="AdionaOscuro.png" alt="Logo adiona" className="logo" />
        </div>

        <div className="slogan_principal">
          <h1 className="m-2 text-xl font-extrabold tracking-tight text-white-900 md:text-2xl lg:text-6xl dark:text-white">Visit the destination of your dreams</h1>
          <p className="texto">Discover the word with us.</p>
        </div>

      </div>

      <div className="part2 w-50 bd-highlight d-inline-block">
        <nav className="bg-white w-100 h-25">
          <div className="w-100">
            <div className="w-100 d-inline-block" id="navbar-default">
              <ul className="flex flex-col font-medium p-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800">
                <li>
                  <a href="/#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Booking</a>
                </li>
                <li>
                  <a href="/#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Rewards</a>
                </li>
                <li>
                  <a href="/#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Profile</a>
                </li>
                <li className="ml-75">
                  <Account />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Carousel />
      </div>
    </div>
    <Opiniones/>
  </>
  );
}
export { Navigation };
