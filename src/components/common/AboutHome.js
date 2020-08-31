import React from 'react'
import abouImage from '../../images/undraw_on_the_office_fbfs.svg'

const AboutHome = () => (
    <section className="container about">
        <div className="about__image">
            <img data-aos="zoom-in" data-aos-delay="200" src={abouImage} alt="Dibujo de una persona sentada sobre un escritorio con un celular en la mano" />
        </div>
        <div className="about__content">
            <div className="about__waistband">acerca de m&iacute;</div>
            <h2 data-aos="fade-in" data-aos-delay="200" className="about__title">Con&oacute;ceme</h2>
            <div data-aos="fade-in-left" data-aos-delay="500" className="about__text">
                <p>
                        Hola soy programador web
                </p>
            </div>
            <h4 data-aos="fade-up" data-aos-delay="800" className="about__subtitle">
                    Sígueme en:
            </h4>
            <div data-aos="fade-up" data-aos-delay="900" className="about__redes_sociales">
                <a className="icon" rel="noreferrer" target="_blank" href="https://github.com/jesusamador-dev">
                    <i className="fab fa-github" />
                </a>
                <a className="icon" rel="noreferrer" target="_blank" href="https://twitter.com/jesusamador_dev">
                    <i className="fab fa-twitter" />
                </a>
                <a className="icon" rel="noreferrer" target="_blank" href="https://www.instagram.com/jesusamador_dev/">
                    <i className="fab fa-instagram" />
                </a>
            </div>
        </div>
    </section>
)

export default AboutHome
