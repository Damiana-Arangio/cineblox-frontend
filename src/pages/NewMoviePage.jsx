import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context/GlobalContext.jsx'  // Import Hook personalizzato per il contesto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function NewMoviePage() {

    /***************
        COSTANTI
    ****************/
    const initialValues = {
        title: "",
        director: "",
        abstract: "",
        image: null
    };

    /* Endpoint Api */
    const apiUrl = "http://localhost:3000/api/movies";          // Rotta store del backend

    /***********
        HOOKS
    ***********/

    /* Hook di Stato */
    const [formData, setFormData] = useState(initialValues);    // Variabile di stato che memorizza i dati del form e permette di aggiornarli dinamicamente
    const [errors, setErrors] = useState({});                   // Variabile di stato che memorizza gli errori di validazione
    /* Hook di Navigazione */
    const navigate = useNavigate();                             // Hook utilizzato per reindirizzare l'utente alla pagina HomePage

    /* Hook di Contesto */
    const { setIsLoading } = useGlobalContext();                /* Destructuring della funzione setIsLoading dal GlobalContext
                                                                   (usata per attivare/disattivare il loader durante le chiamate API) */
    /***************
        RENDERING
    ****************/
    return (
        <>

            {/* SEZIONE NUOVO FILM */}
            <div className="container m-5 d-w-75 mx-auto">

                {/* Header Film */}
                <header className="mt-5 mb-3 ">
                    <h3 className="fs-2">Add <span className="title-new-movie">New Movie</span></h3>
                </header>

                <form onSubmit={handleSubmit}>

                    {/* Titolo Film */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title<span className="obligatory"> * </span></label>
                        <input
                            name="title"
                            type="text"
                            id="title"
                            className="form-control form-control-dark"
                            placeholder="Enter movie title..."
                            value={formData.title}
                            onChange={handleFormData}
                        />
                        {errors.title && <p className="form-error">{errors.title}</p>}
                    </div>

                    {/* Regista */}
                    <div className="mb-3">
                        <label htmlFor="director" className="form-label">Director<span className="obligatory"> * </span></label>
                        <input
                            name="director"
                            type="text"
                            id="director"
                            className="form-control form-control-dark"
                            placeholder="Enter director name..."
                            value={formData.director}
                            onChange={handleFormData}
                        />
                        {errors.director && <p className="form-error">{errors.director}</p>}
                    </div>

                    {/* Abstract */}
                    <div className="mb-3">
                        <label htmlFor="abstract" className="form-label">Abstract<span className="obligatory"> * </span></label>
                        <textarea
                            name="abstract"
                            id="abstract"
                            className="form-control form-control-dark"
                            rows="3"
                            placeholder="Enter a short description..."
                            value={formData.abstract}
                            onChange={handleFormData}
                        />
                        {errors.abstract && <p className="form-error">{errors.abstract}</p>}
                    </div>

                    {/* Immagine */}
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image<span className="obligatory"> * </span></label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="form-control form-control-dark"
                            onChange={handleFormData}
                            accept="image/png, image/jpeg, image/webp"
                        />
                        {errors.image && <p className="form-error">{errors.image}</p>}
                    </div>

                    {/* Bottone */}
                        <button type="submit" className="btn-main mt-3">
                        <FontAwesomeIcon icon={faPaperPlane} className="plan-icon"/>
                        Submit Movie</button>
                </form>
            </div>
        </>
    );


    /***************
        FUNZIONI
    ****************/

    /* Funzione che gestisce l’evento onChange di input, textarea e file */
    function handleFormData(e) {

        setErrors({
            ...errors,
            [e.target.name]: ""                                 // Svuoto l’errore del campo modificato
        });

        if (e.target.name === "image") {
            setFormData({
                ...formData,
                image: e.target.files[0]                        // salvo l’oggetto File
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value                 // Aggiorno l'input modificato con il nuovo valore
            });
        }
    }

    /* Funzione che gestisce l'invio del form */
    function handleSubmit(e) {
        e.preventDefault();                                     // Blocca refresh automatico del form

        axios.post(apiUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(response => {
            console.log(response.data.message); 
            navigate('/movies');                                // Redirect alla pagina dei film
        })
        .catch(error => {
            const backendErrors = {};                           // Oggetto dove salvo gli errori ricevuti dal backend

            error.response.data.errors.forEach(error => {
                backendErrors[error.path] = error.msg;          // Associo ogni errore al nome del campo
            })
            setErrors(backendErrors);                           // Aggiorno lo stato errors per mostrarli sotto gli input
        })
    }
}

export default NewMoviePage;