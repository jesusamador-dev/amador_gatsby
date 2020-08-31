import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import emailjs from 'emailjs-com'

const schema=yup.object().shape({
    name: yup
        .string()
        .required(`El nombre es obligatorio`)
        .max(70, `Solo se permiten hasta 70 caracteres`)
        .matches(/^[a-zA-ZñÑáÁéÉíÍóÓúÚ\sа-яА-ЯёЁ\-]+$/g, {
            message: `Solo se permiten letras`,
            excludeEmptyString: true,
        }),
    email: yup
        .string()
        .email(`Usa un email valido`)
        .required(`El email es obligatorio`),
    message: yup
        .string()
        .required(`El mensaje es obligatorio`)
        .max(500, `Solo se permiten hasta 500 caracteres`),
})

const ContactForm=() => {
    const [showMessage, setShowMessage]=useState(false)
    const messageFinish=`¡Gracias! Me pondré en contacto contigo muy pronto y lograremos grandes cosas juntos.`
    const { register, handleSubmit, errors }=useForm({
        mode: `onChange`,
        resolver: yupResolver(schema),
    })

    const onSubmit=(data) => {
        const button=document.querySelector(`.spin`)
        button.classList.toggle(`processing`)

        emailjs.send(`default_service`, `template_KcXBQCZG`, data, `user_sRxqqJHlwqsBWlGKNoMnV`)
            .then((response) => {
                setShowMessage(true)
                button.classList.toggle(`processing`)
                button.classList.toggle(`done`)
            }, (err) => {
                button.classList.toggle(`processing`)
                console.log(`Error...`, err)
            })
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="form"
            >
                <div className="form__group">
                    <input
                        type="text"
                        className={`form__field ${(errors.name?.message? `is-invalid`:``)}`}
                        name="name"
                        id="name"
                        autoComplete="off"
                        ref={register}
                    />
                    <div
                        className="error"
                        style={{ visibility: errors.name?.message? `visible`:`` }}
                    >
                        {errors.name?.message}
                    </div>
                    <label htmlFor="name" className="form__placeholder">
                        Nombre
                    </label>
                </div>
                <div className="form__group">
                    <input
                        type="email"
                        className={`form__field ${(errors.email?.message? `is-invalid`:``)}`}
                        name="email"
                        id="email"
                        autoComplete="off"
                        ref={register}
                    />
                    <div
                        className="error"
                        style={{ visibility: errors.email?.message? `visible`:`` }}
                    >
                        {errors.email?.message}
                    </div>
                    <label htmlFor="email" className="form__placeholder">
                        Correo eléctronico
                    </label>
                </div>
                <div className="form__group">
                    <textarea
                        name="message"
                        className={`form__field ${(errors.message?.message? `is-invalid`:``)}`}
                        id="mesage"
                        rows="6"
                        ref={register}
                    />
                    <div
                        className="error"
                        style={{ visibility: errors.message?.message? `visible`:`` }}
                    >
                        {errors.message?.message}
                    </div>
                    <label htmlFor="message" className="form__placeholder">
                        Mensaje
                    </label>
                </div>
                <div className="form__submit">
                    <button type="submit" className="btn_submit spin" id="spin">
                        <span>Enviar</span>
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </form>
            <div className="message_finish">
                <p>
                    {showMessage? messageFinish:``}
                </p>
            </div>
        </>
    )
}

export default ContactForm
