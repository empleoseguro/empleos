import React from 'react'
import Card from '../../atoms/Card/Card'
import './noticias.css'

const Noticias = () => {
    return (
        <div className='noticias rounded'>
            <div className=' fs-6 fw-bold text-center w-100 mb-1'>NOTICIAS</div>
            <Card category="noticias" />
        </div>
    )
}

export default Noticias
