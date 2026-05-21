import { Link, NavLink } from "react-router-dom";      /* Import componente Link da React Router */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

function Header() {

    /***************
        RENDERING
    ***************/
    return(

        <nav className="container nav-header">

            {/* Link: Logo + Titolo */}
            <Link className="navbar-brand d-flex align-items-center" to="/movies">
                <img src="/src/assets/imgs/logo-cineblox.png" alt="Cineblox logo" className="logo-img" />
                <div>
                    <h1 className="logo-title">D.A. <span> Cineblox</span></h1>
                    <h6 className="logo-subtitle"> DISCOVER. SHARE . REVIEW </h6>  
                </div>         
            </Link>

            {/* Link: About - All Movies - Add Movie */}
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