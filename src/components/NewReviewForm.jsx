import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function NewReviewForm( {idMovieDetails, reloadReviews} ) {

    /***************
        COSTANTI
    ****************/

    /* Valori iniziali dei campi del form */ 
    const initialValues = {
        text: "",
        vote: 1,
        name: ""
    }

    /* Endpoint Api */
    const apiUrl = `http://localhost:3000/api/movies/${idMovieDetails}/reviews`;

    /***********
        HOOKS
    ***********/
    /* Hook di Stato */
    const [formData, setFormData] = useState(initialValues);    // Variabile di stato che memorizza i dati del form e permette di aggiornarli dinamicamente
    const [errors, setErrors] = useState({});                   // Variabile di stato che memorizza gli errori di validazione

    /***************
        RENDERING
    ***************/
    return(

        <>
            {/* Header Recensione */}
            <header>
                <h3 className="pt-5">Add <span className="title-new-review ">New Review</span></h3>
            </header>

            {/* Form */}
                <form onSubmit={handleSubmit}>

                {/* Testo Recensione */}
                <div className="mb-3">
                    <textarea
                        name="text"
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        placeholder="Write your review here..."
                        className="form-control form-control-dark"
                        value={formData.text}
                        onChange = {handleFormData}>
                    </textarea>
                    {errors.text && <p className="form-error">{errors.text}</p>}
                </div>

                {/* Voto Recensione */}
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label"> 
                        Vote: 
                    </label>
                    <input 
                        name="vote"
                        type="number" 
                        id="vote" 
                        min="1" 
                        max="5" 
                        placeholder="Add a vote..." 
                        className="form-control form-control-dark" 
                        value={formData.vote}
                        onChange={handleFormData}
                    />
                    {errors.vote && <p className="form-error">{errors.vote}</p>}

                </div>

                {/* Nome Recensione */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name: 
                    </label>
                    <input 
                        name="name"
                        type="text" 
                        id="name" 
                        placeholder="Add your name..." 
                        className="form-control form-control-dark"
                        value={formData.name}
                        onChange={handleFormData}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                </div>

                {/* Bottone Invio */}
                <button type="submit" className="btn-main mt-3">
                    <FontAwesomeIcon icon={faPaperPlane} className="plan-icon" />
                    Submit Review 
                </button>
            </form>
        </>
    )

    /***************
        FUNZIONI
    ****************/
    /* Funzione che gestisce l’evento onChange di input e textarea */
    function handleFormData(e) {

        setErrors({
            ...errors,
            [e.target.name]: ""                                 // Svuota l’errore del campo modificato
        });

        setFormData({
            ...formData,
            [e.target.name]: e.target.value                     // Aggiorna l'input modificato con il nuovo valore
        }) 
    }

    /* Funzione che gestisce l'invio del form */
    function handleSubmit(e) {
        e.preventDefault();                                     // Blocca refresh automatico del form

        axios.post(apiUrl, formData, {
            headers: { 'Content-Type': 'application/json'}
        })

        .then(response => {
            setFormData(initialValues)                          // Setto form ai valori iniziali
            setErrors({});
            reloadReviews();                                    // Aggiorno la lista delle recensioni nel componente MovieDetails
            console.log(response.data.message);
        })
        .catch(error => {
            const status = error.response?.status;
            const data = error.response?.data;

            if (status === 400) {
                const backendErrors = {};                       // Oggetto dove salvo gli errori ricevuti dal backend

                data.errors.forEach(error => {
                    backendErrors[error.path] = error.msg;      // Associo ogni errore al nome del campo
                });
                setErrors(backendErrors);
            }
            else if (status === 500) {
                console.log(data.error);                        // Inserimento recensione fallito!
            }
        })
    }
}

export default NewReviewForm;