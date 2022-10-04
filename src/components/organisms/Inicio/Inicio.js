import React from 'react'
import './inicio.css'

export const Inicio = () => {
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center'>

            <div className='anuncio w-75 bg-secondary text-dark text-center p-4 mb-2 rounded'>
                anuncio
            </div>

            <div className='contenedor'>
                <img className='image' src={require('../../../images/trabajo13c.webp')} />

                <div className='texts-image'>
                    <div className='container-text fs-4'>
                        Solos podemos hacer poco,<br /> juntos podemos hacer mucho.
                    </div>
                    <div className='container-text-right fs-4'>
                        Solos podemos hacer poco,<br /> juntos podemos hacer mucho.
                    </div>
                </div>

            </div>

            <div className='d-flex flex-column flex-md-row  justify-content-between w-100 mt-3'>
                
                <div className='noticias shadow px-1'>
                    <div className='d-flex flex-column'>
                        <div className=' fs-6 text-primary fw-bold text-center mb-1'>CONSEJOS</div>
                        <div className='d-flex flex-row shadow-sm mb-2'>
                            <img className='image-sm' src={require('../../../images/trabajo7.webp')} />
                            <div className=' '>Como y cuando pedir aumento en tu trabajo</div>
                        </div>
                        <div className=' d-flex flex-row shadow-sm mb-2'>
                            <img className='image-sm' src={require('../../../images/trabajo7.webp')} />
                            <div className=' '>Como y cuando pedir aumento en tu trabajo</div>
                        </div>
                        <div className=' d-flex flex-row shadow-sm mb-2'>
                            <img className='image-sm' src={require('../../../images/trabajo7.webp')} />
                            <div className=''>Como y cuando pedir aumento en tu trabajo</div>
                        </div>
                        <div className=' d-flex flex-row shadow-sm mb-2'>
                            <img className='image-sm' src={require('../../../images/trabajo7.webp')} />
                            <div className=' '>Como y cuando pedir aumento en tu trabajo</div>
                        </div>
                        <div className=' d-flex flex-row shadow-sm mb-2'>
                            <img className='image-sm' src={require('../../../images/trabajo7.webp')} />
                            <div className=' '>Como y cuando pedir aumento en tu trabajo</div>
                        </div>
                    </div>
                </div>

                <div className='consejos shadow px-1 d-flex flex-column justify-content-center'>
                    
                        <div className='fs-6 text-primary fw-bold text-center mb-1'>NOTICIAS</div>
                        <div className=''>
                            <img className='image-md' src={require('../../../images/trabajo10.webp')} />
                            <div className='fs-6'>Si no rindes en el trabajo deja de hacer esto</div>
                        </div>
                        <div className=''>
                            <img className='image-md' src={require('../../../images/trabajo10.webp')} />
                            <div className='fs-6'>Si no rindes en el trabajo deja de hacer esto</div>
                        </div>
                    
                </div>

                <div className='destacado shadow px-1'>
                    <div className='row'>
                        <div className='col col-12 fs-6 text-primary fw-bold text-center mb-1'>DESTACADO</div>
                        <div className='col'>
                            <img className='image-lg' src={require('../../../images/trabajo3.webp')} />
                            <div className='fs-6'>Si no rindes en el trabajo deja de hacer esto</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
