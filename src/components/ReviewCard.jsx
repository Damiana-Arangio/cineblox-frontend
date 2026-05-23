import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function ReviewCard(props) {

    const { review, totStars } = props;     /* Destructuring dell'oggetto review che contiene la risposta dell'API
                                                e dell'array totStars utilizzato come riferimento per generare 
                                                le 5 stelle di valutazione 
                                            */

    const userInitial = review.name.charAt(0).toUpperCase();    // Recupero la prima lettera del nome e la trasformo in maiuscolo

    /****************
        RENDERING
    ****************/
    return (
        <div className="review-card">

            {/* Utente recensione */}
            <div className="review-user">

                {/* Avatar con iniziale nome */}
                <div className={`review-avatar ${getAvatarColor()}`}>
                    {userInitial}
                </div>

                {/* Nome + Stelle */}
                <div>
                    <h5>{review.name}</h5>

                    <div>
                        {totStars.map((star) => (
                            <FontAwesomeIcon className="stars"
                                key={star}
                                icon={review.vote >= star ? faStar : faStarRegular}
                            />
                        ))}
                    </div>
                </div>
            </div>

                {/* Testo Recensione */}
                <div>
                    <p className="review-text"> 
                        {review.text} 
                    </p> 
                </div>
            </div>
    );

    /***************
       FUNZIONI
   ****************/

    /* Funzione che assegna una classe colore all'avatar in base alla prima lettera del nome */
    function getAvatarColor() {

        const avatarColors = [
            "avatar-blue",
            "avatar-purple",
            "avatar-green",
            "avatar-orange",
            "avatar-pink",
            "avatar-yellow"
        ];

        const colorIndex = userInitial.charCodeAt(0) % avatarColors.length;     // Calcolo l'indice del colore in base alla lettera iniziale
        return avatarColors[colorIndex];                                        // Ritorno la classe CSS del colore selezionato
    }
}

export default ReviewCard;