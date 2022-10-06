import React from 'react'
import Noticias from '../../molecules/Noticias/Noticias'
import Portada from '../../molecules/Portada/Portada'
import Recomendaciones from '../../molecules/Recomendaciones/Recomendaciones'
import BaseTemplate from '../../templates/BaseTemplate'
import './inicio.css'

export const Inicio = () => {
    return (
        <BaseTemplate>
            <div className='d-flex flex-column  w-100 h-50'>
                <div className='anuncio w-100 bg-secondary text-dark text-center py-5 mb-1 text-center rounded'>
                    anuncio caiman
                </div>
                <Portada />
                <div className='d-flex flex-column-reverse flex-lg-row justify-content-between w-100 mt-2'>
                    <Noticias />
                    <Recomendaciones />
                </div>
            </div>
        </BaseTemplate>
    )
}