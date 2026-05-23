import axios from 'axios';
import ReviewCard from '../components/ReviewCard.jsx';
import NewReviewForm from '../components/NewReviewForm.jsx';
import useLoaderContext from "../hooks/useLoaderContext";  // Import Hook personalizzato per il contesto
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function MovieDetails() {

    /***********
         HOOK
     ***********/

    /* Hook di Parametro */
    const { id } = useParams();                     // Recupero l'id dall'URL

    /* Hook di Stato */
    const [movie, setMovie] = useState([]);         // Variabile di stato contentente il singolo film (in base all'id corrente) ritornato dall'API

    /* Hook di Effetto */
    useEffect(() => {
        fetchMovie();                               //Chiamata Api al montaggio del componente
    }, []);

    /* Hook di Navigazione */
    const navigate = useNavigate();                 // Hook utilizzato per reindirizzare l'utente alla pagina NotFoundPage in caso di di errore 404 nella risposta API

    /* Hook di Contesto */
    const { setIsLoading } = useLoaderContext();    /* Destructuring della funzione setIsLoading dal LoaderContext
                                                        (usata per attivare/disattivare il loader durante le chiamate API) */
    /**************
        COSTANTI
    **************/
    const totStars = [1, 2, 3, 4, 5];               // Array statico di riferimento per generare le 5 stelle di valutazione

    
    /***************
        RENDERING
    ***************/
    return (

        <>

            {/* CONTENUTO PRINCIPALE FILM */}
            <article className="movie-details-hero">
                    <div className="movie-details-card">

                    {/* Immagine */}
                    <img 
                        src={movie.image} 
                        className="movie-details-img" 
                        alt={movie.title} 
                    />

                    {/* Titolo - Genere - Abstract */}
                    <div className="movie-details-info">
                        <h3> {movie.title} </h3>
                        <p> {movie.abstract} </p>
                        {movie.Genre && (
                            <span className="movie-details-genre">
                                {movie.Genre}
                            </span>
                        )}
                    </div>
                </div>
            </article>

            {/* SEZIONE RECENSIONI */}
            <div className="container m-5 d-w-75 mx-auto">
                <section>               
                    <header className="d-flex justify-content-between border-bottom pb-2 mb-4 py-3 ">
                        <h3> Reviews</h3>
                        
                        {/* Stelle recensioni */}
                        <div className="d-flex align-items-center gap-2">
                            <h5> Avarage:
                                    {totStars.map((star) => (
                                        <FontAwesomeIcon className="stars"
                                            key={star}
                                            icon={movie.average_vote >= star ? faStar : faStarRegular}
                                            
                                        />
                                    ))}
                            </h5>
                        </div>
                    </header>

                    {/* Recensioni */}
                    <article>
                        {movie.reviews?.map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                                totStars={totStars} 
                            />
                        ))}
                    </article>

                    {/* Form per aggiungere una nuova recensione */}
                    <div>
                        <NewReviewForm 
                            idMovieDetails = {id}
                            reloadReviews = {fetchMovie}
                        />
                    </div>
                </section>
            </div>

            {/* Bottone che riporta alla Home */}
                <div className='text-center m-5'>
                    <Link className="btn-main" to="/movies/"> 
                        <FontAwesomeIcon icon={faArrowLeft} className='px-2'/>
                        Back to Home 
                    </Link>
                </div>
        </>
    )

    /***************
        FUNZIONI
    ****************/

    /* Richiesta API per ottenere i dettagli del film selezionato 
       (in base all'id presente nell'URL) */
    function fetchMovie() {

        // Attiva il loader prima di avviare la richiesta API
        setIsLoading(true);

        const url = 'http://localhost:3000/api/movies/' + id;
        axios.get(url)
            .then(risApi => setMovie(risApi.data))
            .catch(errApi => {

                // Gestione errore 400 -> ID non valido es. movies/ciao
                if (errApi.response?.status === 400) {
                    console.log(errApi.response.data.errors[0].msg);
                    navigate('/404');
                }

                // Gestione errore 404 -> risorsa non trovata (id numerico non esistente)
                else if (errApi.response?.status === 404) {
                    console.log(errApi.response.data.error);
                    navigate('/404');
                }
            })
            .finally(() => setIsLoading(false));        // Disattiva il loader in ogni caso (successo o errore)
    }
}

export default MovieDetails;