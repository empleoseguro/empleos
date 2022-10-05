import React from 'react'
import Noticias from '../../molecules/Noticias/Noticias'
import Recomendaciones from '../../molecules/Recomendaciones/Recomendaciones'
import './inicio.css'

export const Inicio = () => {
    return (
        <div className='container d-md-flex'>


            <div className='d-flex flex-column  w-100 h-50'>

                <div className='anuncio w-100 bg-secondary text-dark text-center py-5 mb-1 text-center rounded'>
                    anuncio caiman
                </div>

                <div className='contenedor w-100'>
                    <img className='image' src={require('../../../images/trabajo13c.webp')} />

                    <div className='texts-image'>
                        <div className='container-text fs-4'>
                            Solos podemos hacer poco,<br /> juntos podemos hacer mucho.
                        </div>

                    </div>

                </div>

                <div className='d-flex flex-column flex-lg-row justify-content-between w-100 mt-1'>
                    <Recomendaciones />
                    <Noticias />
                </div>
            </div>
            <div className='w-auto h-50 text-dark x-2 rounded ms-1'>
                <div className='text-center bg-light' style={{ height: 400 }}>anuncio boleta</div>
                <div className='mt-2 bg-light px-1'>
                    <div className='fs-6 mt-2 ms-1 '>Lo mas visto</div>

                    <div className='border-top border-bottom p-1 fs-6 '>
                        <a href='#'>Como conseguir trabajo rapido?</a>

                    </div>
                    <div className='border-bottom p-1 fs-6 '>
                        <a href='#'>Mensajes motivacionales</a>

                    </div>
                    <div className='border-bottom p-1 fs-6 '>
                        <a href='#'>Por esta razon no te contratan</a>

                    </div>

                    <div className='border-bottom p-1 fs-6 '>
                        <a href='#'>Arma tu curriculum con estas tecnicas jamas reveladas</a>

                    </div>


                </div>

            </div>
        </div>
    )
}
