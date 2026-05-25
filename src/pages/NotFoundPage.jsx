import { Link } from "react-router-dom"

function NotFoundPage() {

    /***************
        RENDERING
    ****************/
    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h2 className="fs-1 pt-3">Page Not Found</h2>
            <p className="my-2">Sorry, but the page you are looking for does not exist.</p>
            <Link className="btn-main mt-3" to="/movies"> 
                Discover Movies
            </Link>
        </div>
    );
}

export default NotFoundPage