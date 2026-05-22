import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';   // Import libreria di Routing
import DefaultLayout from './layout/DefaultLayout';                // Import Layout principale pagina
import MoviesPage from './pages/MoviesPage';                       // Import pagina lista film
import MovieDetailsPage from './pages/MovieDetailsPage';           // Import Pagina dettagli film
import NotFoundPage from './pages/NotFoundPage';                   // Import Pagina Not Found
import NewMoviePage from './pages/NewMoviePage'                   // Import pagina nuovo film
import { GlobalProvider } from './context/GlobalContext';



function App() {

  return (

    <>
      {/*****************************
              PROVIDER GLOBALE
      *******************************/}
      <GlobalProvider>  {/* Gestisce il Loader in tutta l'app tramite Context */}

        {/*****************************
                GESTIONE DELLE ROTTE
          *******************************/}
        <BrowserRouter>

          {/* Componente che raggruppa tutte le rotte */}
          <Routes>

            {/* Rotta genitore - contenete il layout */}
            <Route element={<DefaultLayout />}>

              {/* Rotte figlie - mostrate dentro <Outlet/> */}
              <Route path='/movies'>
                <Route index element={<MoviesPage />} />
                <Route path=":id" element={<MovieDetailsPage />} />
                <Route path="create" element={<NewMoviePage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />    {/* Rotta 404 - per gestire percorsi inesistenti */}

            </Route>
          </Routes>
        </BrowserRouter>

      </GlobalProvider>
    </>
  )
}

export default App