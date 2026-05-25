import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(
        <>
            {/* Logo testuale + Descrizione progetto */ }
            <div className="container footer-top">
                <div className="footer-brand">
                    <h4 className="logo-title"> D.A. <span> Cineblox</span> </h4>
                    <p>
                        A movie archive to discover, 
                        <br/>
                        share and review films.
                    </p>
                </div>

                {/* Link Contatti */}
                <div className="footer-contacts">
                    <h6>Contacts</h6>

                    {/* Github */}
                    <div className="footer-icons">
                        <a href="https://github.com/Damiana-Arangio" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/damiana-arangio-55b74b349/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        {/* Email */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=arangio.damiana@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="container footer-bottom text-center">
                <small>
                    © 2026 Damiana Arangio - Portfolio Project
                </small>
            </div>
        </>
    )   
}

export default Footer;