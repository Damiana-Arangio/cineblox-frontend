/************************************* NewMoviePage  **************************************/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context/GlobalContext.jsx'  // Import Hook personalizzato per il contesto
import axios from "axios";

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
        HOOK
    ***********/

    /* Hook di Stato */
    const [formData, setFormData] = useState(initialValues);    // Variabile di stato che memorizza i dati del form e permette di aggiornarli dinamicamente


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

            <section>
                <div>

                
                {/* Header Film */}
                <header className="mt-5 mb-3 ">
                    <h3 className="fs-2">Add new Movie</h3>
                </header>

                <form onSubmit={handleSubmit}>

                    {/* Titolo Film */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input
                            name="title"
                            type="text"
                            id="title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleFormData}
                            // required
                        />
                    </div>

                    {/* Regista */}
                    <div className="mb-3">
                        <label htmlFor="director" className="form-label">Director:</label>
                        <input
                            name="director"
                            type="text"
                            id="director"
                            className="form-control"
                            value={formData.director}
                            onChange={handleFormData}
                            // required
                        />
                    </div>

                    {/* Abstract */}
                    <div className="mb-3">
                        <label htmlFor="abstract" className="form-label">Abstract:</label>
                        <textarea
                            name="abstract"
                            id="abstract"
                            className="form-control"
                            rows="3"
                            value={formData.abstract}
                            onChange={handleFormData}
                            // required
                        />
                    </div>

                    {/* Immagine */}
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image:</label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="form-control"
                            onChange={handleFormData}
                            // required
                        />
                    </div>

                    {/* Bottone */}
                    <footer>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </footer>
                </form>
                </div>
            </section>
            </div>
        </>
    );


    /***************
        FUNZIONI
    ****************/

    /* Funzione che gestisce l’evento onChange di input e textarea */
    function handleFormData(e) {
        if (e.target.name === "image") {
            setFormData({
                ...formData,
                image: e.target.files[0]            // salvo l’oggetto File
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value     // Aggiorno l'input modificato con il nuovo valore
            });
        }
    }

    /* Funzione che gestisce l'invio del form */
    function handleSubmit(e) {
        e.preventDefault();                         // Blocca refresh automatico del form

        axios.post(apiUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })

            .then(response => {
                console.log(response.data.message); 
                navigate('/movies');                // Redirect alla home
            })
            .catch(error => {
                error.response.data.errors.forEach(error => {
                    console.log(error.msg);
                })
            })
    }

}

export default NewMoviePage;