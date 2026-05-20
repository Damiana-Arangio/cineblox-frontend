/************************** Componente Movies ****************************/

import axios from "axios";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { useGlobalContext } from '../context/GlobalContext.jsx'  // Import Hook personalizzato per il contesto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Movies() {

    /***********
        HOOK
    ***********/

    /* Hook di Stato */
    const [movies, setMovies] = useState([]);                               // Variabile di stato utilizzata per salvare i film ritornati dall'API
    const [currentPage, setCurrentPage] = useState(1);                      // Variabile di che contiene la pagina corrente

    /* Hook di Effetto */
    useEffect(() => {
        fetchMovies();   // Chiamata API al montaggio del componente
    }, []);

    /* Hook di Contesto */
    const { setIsLoading } = useGlobalContext();                            /*  Destructuring della funzione setIsLoading dal GlobalContext
                                                                                (usata per attivare/disattivare il loader durante le chiamate API) */

    /**************************
        COSTANTI PAGINAZIONE
    ***************************/
    const moviesForPage = 6;                                                // Numero di film da mostrare per ogni pagina
    const lastMovieIndex = currentPage * moviesForPage;                     // Indice finale dei film da mostrare nella pagina corrente
    const firstMovieIndex = lastMovieIndex - moviesForPage;                 // Indice iniziale dei film da mostrare nella pagina corrente
    const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);    // Array dei film da mostrare nella pagina corrente
    const totalPages = Math.ceil(movies.length / moviesForPage);            // Numero totale di pagine

    /***************
        RENDERING
    ***************/
    return (

        <>
            <div className="container my-4">

                {/* Titolo + sottotitolo */}
                <h1 className="text-white"> All <span className="text-primary"> Movies </span> </h1>
                <h6 className="text-grey text-muted-blue"> Explore the world of D.A. Cinebox </h6>

                {/* Contenitore lista card */}
                <div className=" py-2 my-3 container-card">
                    {currentMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}                                   // Passaggio dell'intero oggetto come props
                        />
                    ))}
                </div>

                {/* Bottoni scorrimento film */}
                <div className="container-scroll-movies">

                    <button
                        className="arrow-scroll-movies"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>

                    <span className="count-scroll-movies">
                        <strong>{currentPage}</strong>
                        <span>/</span>
                        <span>{totalPages}</span>
                    </span>

                    <button
                        className="arrow-scroll-movies"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>

                </div>

            </div>
        </>
    )

    /***************
        FUNZIONI
    ****************/

    /* Richiesta API per ottenere la lista dei film */
    function fetchMovies() {

        // Attiva il loader prima di avviare la richiesta API
        setIsLoading(true);

        const url = 'http://localhost:3000/api/movies';
        axios.get(url)
            .then(risApi => setMovies(risApi.data))
            .catch(errApi => console.log(errApi))
            .finally(() => setIsLoading(false));                                // Disattiva il loader in ogni caso (successo o errore)
    }
}

export default Movies;