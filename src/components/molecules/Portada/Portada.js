import React from 'react'
import './portada.css'

const Portada = () => {
    return (
        <div className='contenedor w-100'>
            <img className='image' src={require('../../../images/trabajo13c.webp')} />

            <div className='texts-image'>
                <div className='container-text fs-4'>
                    Solos podemos hacer poco,<br /> juntos podemos hacer mucho.
                </div>

            </div>

        </div>
    )
}

export default Portada
