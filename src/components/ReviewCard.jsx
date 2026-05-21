
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function ReviewCard(props) {

    const { review, totStars } = props;     /* Destructuring dell'oggetto review che contiene la risposta dell'API
                                                e dell'array totStars utilizzato come riferimento per generare 
                                                le 5 stelle di valutazione 
                                            */

    /****************
        RENDERING
    ****************/
    return (
        <>
            <div className="card mb-4 bg-dark-subtle">

                {/* Testo Recensione */}
                <div className="card-body">
                    <p className="card-text"> {review.text} </p> 
                </div>

                {/* Voto Recensione */}
                <strong className="px-3">
                    Vote: {
                        totStars.map( (star) => (
                            <FontAwesomeIcon className="stars"
                                key={star}
                                icon={review.vote >= star ? faStar : faStarRegular}
                            />
                        ))}
                </strong>
                
                {/* Autore Recensione */}
                <address className="px-3"> <small> <i> Name: {review.name} </i> </small> </address>
            </div>
        </>
    )
}

export default ReviewCard;