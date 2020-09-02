import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => (
    <footer>
        <section className="container footer">
            <div className="footer__redes">
                <OutboundLink className="icon" rel="noreferrer" target="_blank" href="https://github.com/jesusamador-dev">
                    <i className="fab fa-github" />
                </OutboundLink>
                <OutboundLink className="icon" rel="noreferrer" target="_blank" href="https://twitter.com/jesusamador_dev">
                    <i className="fab fa-twitter" />
                </OutboundLink>
                <OutboundLink className="icon" rel="noreferrer" target="_blank" href="https://www.instagram.com/jesusamador_dev/">
                    <i className="fab fa-instagram" />
                </OutboundLink>
                <OutboundLink className="icon" href="https://www.linkedin.com/in/jes%C3%BAs-guadalupe-macias-amador/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in" />
                </OutboundLink>
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
