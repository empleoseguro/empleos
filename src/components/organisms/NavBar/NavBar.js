import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import favicon from './favicon.svg'
import ImageLazyLoad from '../../atoms/ImageLazyLoad/ImageLazyLoad'

export const NavBar = () => {
    //que ladilla
    return (
        <><nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand  d-flex flex-row align-items-center">
                    <ImageLazyLoad src={favicon} className='logo' height="28" alt="Empleo Seguro: Tu guía laboral en línea" />
                    <div className='nav-title ms-1 text-dark'>MPLEO SEGURO</div>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto fw-bold">

                        <div className="nav-item disabled  dropdown">
                            <Link to="/" className="dropdown-toggle disabled nav-link text-decoration-none" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                CATEGORÍAS
                            </Link>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item disabled" href='/'>Recomendaciones</a></li>
                                <li><a className="dropdown-item disabled" href='/'>Noticias</a></li>
                                <li><a className="dropdown-item disabled" href='/'>Mini Tips</a></li>
                                <li><a className="dropdown-item disabled" href='/'>Preguntas frecuentes</a></li>
                                <li><a className="dropdown-item disabled" href='/'>Testimonios</a></li>
                            </ul>
                        </div>
                        <Link to="/" className='"nav-item nav-link'>INICIO</Link>
                        <Link to="/formulario" className='"nav-item nav-link'>FORMULARIO</Link>
                        <Link to="/about/contact" className='"nav-item nav-link'>CONTACTO</Link>
                        <Link to="/about/aboutus" className='"nav-item nav-link'>SOBRE NOSOTROS</Link>
                    </div>
                </div>
            </div>
        </nav><div className='mt-5' style={{ height: '1px' }}></div>
        </>
    )
}