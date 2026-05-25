import { Link, NavLink } from "react-router-dom";      
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";

function Header() {

    /***********
        HOOKS
    ************/
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    /***************
        RENDERING
    ***************/
    return(

        <nav className="container nav-header">

            {/* Logo e titolo */}
            <Link className="navbar-brand d-flex align-items-center" to="/about">
                <img src="/src/assets/imgs/logo-cineblox.png" alt="Cineblox logo" className="logo-img" />
                <div>
                    <h1 className="logo-title">D.A. <span> Cineblox</span></h1>
                    <h6 className="logo-subtitle"> DISCOVER. SHARE . REVIEW </h6>  
                </div>         
            </Link>

            {/* Menu di navigazione */}
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

            {/* Audio di sottofondo */}
            <audio ref={audioRef} src="/audio/music.mp3" loop />

            <button className="music-btn" onClick={toggleMusic}>
                {isPlaying ? "❚❚ Now Playing" : "♪ Cine Lounge"}
            </button>
        </nav>
    )

    /***************
        FUNZIONI
    ****************/
    /* Avvia o mette in pausa la musica di sottofondo */
    function toggleMusic() {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.volume = 0.01;
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
}

export default Header;