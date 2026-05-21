import { Link } from "react-router-dom";

function MovieCard(props) {

    const { movie } = props;     // Destructuring dell'oggetto movies che contiene la risposta dell'API

    /***************
        RENDERING
    ***************/
    return (

        <>
            {/* Immagine + Informazioni film */ }
            <div className="container-single-card">
                <div className="card movie-card">
                    <img src={movie.image} className="movie-card-img" alt={movie.title}/>
                    <div className="card-body movie-card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <address> {movie.director} </address>
                        <h6>{movie.genre}</h6>
                        <p className="card-text movie-card-text"> {movie.abstract} </p>
                        <Link to={`/movies/${movie.id}`} className="btn-main see-more-btn">See more</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard;