import React, { useEffect } from 'react'
import AOS from 'aos'
import hero from '../../images/image_1.png'
import curriculum from '../../files/JesusAmadorCV.pdf'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const HeroHome=() => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: window.innerWidth<768,
        })
    })
    return (
        <section className="container hero">
            <div className="hero__content">
                <h1 data-aos="fade-up" data-aos-delay="500" className="hero__title">¡Hey! Soy Jesús Amador</h1>
                <h2 data-aos="fade-up" data-aos-delay="800" className="hero__subtitle">Desarrollador Web</h2>
                <p data-aos="fade-up" data-aos-delay="1200" className="hero__text">
                    Estudio ingeniería en sistemas computacionales y actualmente me dedico al desarrollo web, enfocado en Front End.
                </p>
                <div className="hero__contact">
                    <div data-aos-delay="1500" data-aos="fade-right" className="hero__email">
                        <p>Email:</p>
                        <OutboundLink href="mailto:jesus.macias.amador@gmail.com">jesus.macias.amador@gmail.com</OutboundLink>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1500" className="hero__github">
                        <p>Github</p>
                        <OutboundLink target="_blank" rel="noreferrer" href="https://github.com/jesusamador-dev">github.com/jesusamador-dev</OutboundLink>
                    </div>
                </div>
                <div className="hero__buttons" data-aos="fade-up" data-aos-delay="1800">
                    <a className="btn btn__cv" href={curriculum} download>Descargar CV</a>
                </div>
            </div>
            <div className="hero__image">
                <img data-aos="zoom-in" data-aos-delay="500" src={hero} alt="Imagen de un persona sentada sobre un escritorio" />
            </div>
        </section>
    )
}
export default HeroHome
