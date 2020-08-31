import React from 'react'

const Footer = () => (
    <footer>
        <section className="container footer">
            <div className="footer__redes">
                <a className="icon" rel="noreferrer" target="_blank" href="https://github.com/jesusamador-dev">
                    <i className="fab fa-github" />
                </a>
                <a className="icon" rel="noreferrer" target="_blank" href="https://twitter.com/jesusamador_dev">
                    <i className="fab fa-twitter" />
                </a>
                <a className="icon" rel="noreferrer" target="_blank" href="https://www.instagram.com/jesusamador_dev/">
                    <i className="fab fa-instagram" />
                </a>
                <a className="icon" href="https://www.linkedin.com/in/jes%C3%BAs-guadalupe-macias-amador/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in" />
                </a>
            </div>
            <div className="footer__name">
                <p>Desarrollador Web</p>
            </div>
            <div className="footer__copyrigth">
                <p>© 2020 Jesús Amador</p>
            </div>
        </section>
    </footer>
)

export default Footer
