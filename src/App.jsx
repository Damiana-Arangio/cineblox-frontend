import './App.css'
import DefaultLayout from './layout/DefaultLayout';                // Import Layout principale pagina
import AllMoviesPage from './pages/AllMoviesPage';                 // Import pagina lista film
import MovieDetailsPage from './pages/MovieDetailsPage';           // Import Pagina dettagli film
import NotFoundPage from './pages/NotFoundPage';                   // Import Pagina Not Found
import AddNewMoviePage from './pages/AddNewMoviePage';             // Import pagina nuovo film
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
                <Route index element={<AllMoviesPage />} />
                <Route path=":id" element={<MovieDetailsPage />} />
                <Route path="create" element={<AddNewMoviePage />} />
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