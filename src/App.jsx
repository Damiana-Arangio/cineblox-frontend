import './App.css'
import DefaultLayout from './layout/DefaultLayout';                // Import Layout principale pagina
import MoviesPage from './pages/MoviesPage';                       // Import pagina lista film
import MovieDetailsPage from './pages/MovieDetailsPage';           // Import Pagina dettagli film
import NotFoundPage from './pages/NotFoundPage';                   // Import Pagina Not Found
import NewMoviePage from './pages/NewMoviePage';                   // Import pagina nuovo film
import AboutPage from './pages/AboutPage';                         // Import pagina About
import { BrowserRouter, Routes, Route } from 'react-router-dom';   // Import libreria di Routing
import { LoaderProvider } from './context/LoaderContext';          // Import Provider del Loader



function App() {

  /**********
    RENDER
  **********/
  return (

    <>
      {/* Provider */}
      <LoaderProvider>

        {/* Routing */}
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>

              {/* Rotta About */}
              <Route path='/about' element={<AboutPage />} />

              {/* Rotte Movies */}
              <Route path='/movies'>
                <Route index element={<MoviesPage />} />
                <Route path=":id" element={<MovieDetailsPage />} />
                <Route path="create" element={<NewMoviePage />} />
              </Route>

              {/* Rotta 404 */}
              <Route path="*" element={<NotFoundPage />} />   

            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </>
  )
}

export default App