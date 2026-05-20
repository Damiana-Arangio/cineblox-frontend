/************************** Componente Header ****************************/

import { Link, NavLink } from "react-router-dom";      /* Import componente Link da React Router */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return(

        <nav className="container nav-header">

            {/* Logo + Titolo */}
            <Link className="navbar-brand d-flex align-items-center" to="/movies">
                <img src="/src/assets/imgs/logo-cineblox.png" alt="Cineblox logo" className="logo-img" />
 
                <div>
                    <h1 className="text-sky logo-title">D.A. <span className="text-sky-light"> Cineblox</span></h1>
                    <h6 className="logo-subtitle"> DISCOVER. SHARE . REVIEW </h6>  
                </div>         
            </Link>

            {/* Link centrali */}
                <ul className="links-header">
                    <li>
                        <NavLink to="/about" className="link-header">About</NavLink >
                    </li>

                    <li>
                    <NavLink to="/movies" end className="link-header">All Movies</NavLink >
                    </li>

                    <li>
                        <NavLink to="/movies/create" className="link-header"> Add Movie </NavLink >
                    </li>
                </ul>

            {/* Icone da aggiungere */}
                <p className="music-icon">icone</p> 
        </nav>
    )
}

export default Header;