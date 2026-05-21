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
                    <div className="footer-icons">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faEnvelope} />
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