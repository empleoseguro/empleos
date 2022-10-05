import React from 'react'
import './navbar.css'
import favicon from './favicon.svg'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a href="#" class="navbar-brand  d-flex flex-row align-items-center">
                    <img src={favicon} className='logo' height="28" alt="CoolBrand" />
                    <div className='nav-title ms-1 text-dark'>MPLEO SEGURO</div>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <a href="#" class="nav-item nav-link active">INICIO</a>
                        <a href="#" class="nav-item nav-link">FORMULARIO</a>
                        <a href="#" class="nav-item nav-link">SOBRE NOSOTROS</a>
                        <a href="#" class="nav-item nav-link">AYUDA</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

{/* </nav> <a href="#" class="navbar-brand">
                    <img className='logo' src={favicon} />
                    <a class="navbar-brand" href="#">MPLEO SEGURO</a>
                </a> */}