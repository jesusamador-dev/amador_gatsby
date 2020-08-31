import React, { useState, useEffect } from 'react'
import { Link as NavLink } from 'gatsby'
import { AnchorLink as HashLink } from "gatsby-plugin-anchor-links"
import logoWhite from '../../images/logo2.svg'
import logo from '../../images/logo.svg'

const Header = () => {
    const [checked, setChecked] = useState(localStorage.getItem(`theme`) === `dark`)
    let logoDefault = checked ? logoWhite : logo

    useEffect(() => {
        document
            .getElementsByTagName(`HTML`)[0]
            .setAttribute(`data-theme`, localStorage.getItem(`theme`))
        logoDefault = checked ? logoWhite : logo
    }, [checked])

    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem(`theme`, `dark`)
            setChecked(true)
        } else {
            localStorage.setItem(`theme`, `light`)
            setChecked(false)
        }
    }

    const toggleMenu = (e) => {
        e.preventDefault()
        const body = document.querySelector(`#body`)
        body.classList.toggle(`mobile_menu_open`)
        body.classList.toggle(`mobile_menu_close`)
    }

    return (
        <header className="header">
            <div className="navbar_container">
                <div className="hamburger_box" onClick={toggleMenu}>
                    <div className="hamburger_inner">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div className="nav__brand">
                    <NavLink to="/" rel="canonical">
                        <picture>
                            <source srcSet={logoWhite} media="(prefers-color-scheme: dark) or (prefers-color-scheme: no-preference)" />
                            <source srcSet={logo} media="(prefers-color-scheme: light)" />
                            <img src={logoDefault} className="nav__logo" loading="lazy" alt="Logotipo" />
                        </picture>
                    </NavLink>
                </div>
                <div className="delimitter" />
                <nav className="nav">
                    <ul className="navbar">
                        <li className="navbar__item">
                            <HashLink
                            className="navbar__link"
                                to="/#home"
                            >
                                <span>
                                    <span className="navbar__text">Inicio</span>
                                </span>
                            </HashLink>
                        </li>
                        <li className="navbar__item">
                            <HashLink
                            className="navbar__link"
                                to="/#about"

                            >
                                <span>
                                    <span className="navbar__text">Acerca de m&iacute;</span>
                                </span>
                            </HashLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink activeClassName="active" className="navbar__link" to="/projects">
                                <span>
                                    <span className="navbar__text">Proyectos</span>
                                </span>
                            </NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink activeClassName="active" className="navbar__link" to="/blog">
                                <span>
                                    <span className="navbar__text">Blog</span>
                                </span>
                            </NavLink>
                        </li>
                        <li className="navbar__item">
                            <HashLink
                            className="navbar__link"
                                to="/#contact"

                            >
                                <span>
                                    <span className="navbar__text">Contacto</span>
                                </span>
                            </HashLink>
                        </li>
                    </ul>
                </nav>

                <label id="switch" className="switch">
                    <input
                        type="checkbox"
                        defaultChecked={checked}
                        onChange={() => toggleThemeChange()}
                        id="slider"
                    />
                    <span className="slider round" />
                </label>

                <div className="delimitter" />
                <div className="nav__redes_sociales">
                    <a className="nav__icon" href="https://www.instagram.com/jesusamador_dev/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram" />
                    </a>
                    <a className="nav__icon" href="https://twitter.com/jesusamador_dev" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter" />
                    </a>
                    <a className="nav__icon" href="https://www.linkedin.com/in/jes%C3%BAs-guadalupe-macias-amador/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="nav__icon" href="https://github.com/jesusamador-dev" target="_blank" rel="noreferrer">
                        <i className="fab fa-github" />
                    </a>
                </div>
            </div>
            <nav className="navbar_container_mobile">
                <div className="hamburger_close" onClick={toggleMenu}>
                    <div className="hamburger_box">
                        <div className="hamburger_inner">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>

                <ul className="navbar_mobile">
                    <li className="navbar_mobile__item">
                        <HashLink
                            onClick={toggleMenu}
                            to="/home"
                        >
                            <span>
                                <span className="navbar__text">Inicio</span>
                            </span>
                        </HashLink>
                    </li>
                    <li className="navbar_mobile__item">
                        <HashLink
                            onClick={toggleMenu}
                            to="/#about"

                        >
                            <span>
                                <span className="navbar__text">Acerca de m&iacute;</span>
                            </span>
                        </HashLink>
                    </li>
                    <li className="navbar_mobile__item">
                        <NavLink activeClassName="active" className="navbar_mobile__link" to="/projects">
                            <span>
                                <span className="navbar__text">Proyectos</span>
                            </span>
                        </NavLink>
                    </li>
                    <li className="navbar_mobile__item">
                        <NavLink activeClassName="active" className="navbar_mobile__link" to="/blog">
                            <span>
                                <span className="navbar__text">Blog</span>
                            </span>
                        </NavLink>
                    </li>
                    <li className="navbar_mobile__item">
                        <HashLink
                            onClick={toggleMenu}
                            to="/#contact"
                        >
              Contacto
                        </HashLink>
                    </li>
                    <li>
                        <div className="navbar_mobile__redes_sociales">
                            <a className="nav__icon" href="https://www.instagram.com/jesusamador_dev/" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="nav__icon" href="https://twitter.com/jesusamador_dev" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="nav__icon" href="https://www.linkedin.com/in/jes%C3%BAs-guadalupe-macias-amador/" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="nav__icon" href="https://github.com/jesusamador-dev" target="_blank" rel="noreferrer">
                                <i className="fab fa-github" />
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
