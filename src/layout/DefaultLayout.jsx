import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext.jsx'  // Import Hook personalizzato per il contesto             

function DefaultLayout() {

    // Destructuring della variabile isLoading dal GlobalCoontext
    const { isLoading } = useGlobalContext();

    /****************
        RENDERING
    ****************/    
    return(

        <div className="container-layout">
            <header className="header-page">
                <Header/>
            </header>

            <main className="main-content">
                <Outlet/>
            </main>

            <footer className="footer-page">
                <Footer/>
            </footer>

            {isLoading && <Loader />}   {/* Se la variabile di stato "isLoading è true mostro il componente Loader" */}
        </div>       
    )   
}

export default DefaultLayout;