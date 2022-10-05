import React from 'react'
import './card.css'
import twitter from '../../../images/twitter.svg'
import facebook from '../../../images/facebook.svg'
import instagram from '../../../images/instagram.svg'
import abrir from '../../../images/abrir.svg'

const Card = ({ category }) => {

    return (
        category === 'noticias' ? <Noticias /> : category === 'recomendaciones' ? <Recomendaciones /> : null
    )
}

export default Card

const Recomendaciones = () => {
    const title = "Como y cuando pedir aumento en tu trabajo"
    const description = "Para pedir un aumento de tu sueldo debes de decirle al jefe"
    return (
        <div className='row row-cols-2 g-0 py-1 px-2 bg-light rounded shadow-sm'>
            <div className='col-3 d-flex justify-content-center align-items-center'><img className='image-sm rounded w-100 h-75' alt={`imagen del articulo: ${title}`} src={require('../../../images/trabajo7.webp')} /></div>
            <div className='col-9 d-flex flex-column justify-content-between'>
                <div className='mx-2'>
                    <div className='title fs-6 fw-bold m-1'>{title}. <a href='#'><img alt='icono de abrir' src={abrir} className='mb-1' /></a></div>
                    <div className='description fs-6'>{description}.</div>
                </div>
                
            </div>
            <div className='d-flex flex-row border-top text-end p-1 w-100'>
                    <div className='col-9 text-start fs-6 text-primary'>Kevin</div>
                    <div className='col-1'><img alt='icono red social twitter' className='icon-sm' src={twitter} /></div>
                    <div className='col-1'><img alt='icono red social facebook' className='icon-sm' src={facebook} /></div>
                    <div className='col-1'><img alt='icono red social instagram' className='icon-sm' src={instagram} /></div>

                </div>
        </div>

    )
}

const Noticias = () => {
    return (
        <div className='bg-light p-1'>
            <div className=' bg-light  px-1 rounded shadow-sm'>
                <img className='image-md' src={require('../../../images/trabajo10.webp')} />
                <div className='title fs-6 fw-bold text-secondary'>Si no rindes en el trabajo deja de hacer esto</div>
            </div>
        </div>
    )
}
