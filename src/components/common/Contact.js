import React from 'react'

import ContactForm from './ContactForm'
import image from '../../images/contact_image.png'

const Contact=() => (
    <section className="container contact">
        <div className="contact__header" />
        <div className="contact__form">
            <h2 className="contact__title" data-aos="fade-in" data-aos-delay="200">Contacto</h2>
            <p className="contact__text" data-aos="fade-up" data-aos-delay="300">
                ¿Te interesa que forme parte de tu equipo o construir algo juntos?
                Contáctame.
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
                <ContactForm />
            </div>

        </div>
        <div className="contact__image">
            <img src={image} alt="" data-aos="zoom-in" data-aos-delay="200" />
        </div>
    </section>
)

export default Contact
