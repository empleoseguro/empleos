import React from 'react'
import './navbar.css'
import favicon from './favicon.svg'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
            <div className='container'>
            <div class="collapse navbar-collapse mt-1">
                <img className='logo' src={favicon}/>
                <a class="navbar-brand" href="#">MPLEO SEGURO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="d-flex justify-content-end fw-bold nav-two" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SOBRE NOSOTROS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">AYUDA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FORMULARIO</a>
                    </li>
                </ul>

            </div>
            </div>
        </nav>
    )
}
