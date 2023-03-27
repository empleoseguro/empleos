import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import favicon from './favicon.svg'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 fixed-top shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand  d-flex flex-row align-items-center">
                    <img loading='lazy' src={favicon} className='logo' height="28" alt="EmpleoSeguro Icon" />
                    <div className='nav-title ms-1 text-dark'>MPLEO SEGURO</div>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto fw-bold">
                        <Link to="/" className='"nav-item nav-link'>INICIO</Link>
                        <Link to="/formulario" className='"nav-item nav-link'>FORMULARIO</Link>
                        <Link to="/about/contact" className='"nav-item nav-link'>CONTACTO</Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}