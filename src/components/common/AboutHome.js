import React from 'react'
import abouImage from '../../images/undraw_on_the_office_fbfs.png'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const AboutHome=() => (
    <section className="container about">
        <div className="about__image">
            <img data-aos="zoom-in" data-aos-delay="200" src={abouImage} alt="Dibujo de una persona sentada sobre un escritorio con un celular en la mano" />
        </div>
        <div className="about__content">
            <div className="about__waistband">acerca de m&iacute;</div>
            <h2 data-aos="fade-in" data-aos-delay="200" className="about__title">Con&oacute;ceme</h2>
            <div data-aos="fade-in-left" data-aos-delay="500" className="about__text">
                <p>
                    Tengo 22 años, apasionado por las nuevas tecnologías y buscando crecer como profesional.
                    Me gusta crear soluciones innovadoras, aprender de mi entorno y de mis compañeros mientras transmito mis conocimientos.
                </p>
            </div>
            <h4 data-aos="fade-up" data-aos-delay="800" className="about__subtitle">
                Sígueme en:
            </h4>
            <div data-aos="fade-up" data-aos-delay="900" className="about__redes_sociales">
                <OutboundLink className="icon" rel="noreferrer" target="_blank" href="https://github.com/jesusamador-dev">
                    <i className="fab fa-github" />
                </OutboundLink>
                <OutboundLink className="icon" rel="noreferrer" target="_blank" href="https://twitter.com/jesusamador_dev">
                    <i className="fab fa-twitter" />
                </OutboundLink>
                <OutboundLink className="icon" rel="noreferrer" target="_blank" href="https://www.instagram.com/jesusamador_dev/">
                    <i className="fab fa-instagram" />
                </OutboundLink>
            </div>
        </div>
    </section>
)

export default AboutHome
