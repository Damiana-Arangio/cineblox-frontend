function AboutPage() {

    /***************
        RENDERING
    ***************/
    return (

        <section className="about-page">
            <div className="container about-content">

                {/* Titolo + Sottotitolo */}
                <h2 className="about-title">About <span>Cineblox</span></h2>
                <h3 className="about-subtitle">
                    A movie archive to discover, share, and review films.
                </h3>

                {/* Contenuto */}
                <div className="about-text">
                    <p>
                        Cineblox is a full-stack web application created as a portfolio project.
                        <br />
                        It allows users to discover movies, read details, share reviews
                        and add new films through a simple and modern interface.
                        <br />
                        The project focuses on clean design, usability and a smooth
                        experience for every movie lover.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default AboutPage;