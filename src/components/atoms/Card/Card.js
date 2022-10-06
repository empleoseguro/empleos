import React from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'
import twitter from '../../../images/twitter.svg'
import facebook from '../../../images/facebook.svg'
import instagram from '../../../images/instagram.svg'
import abrir from '../../../images/abrir.svg'

const Card = ({ category }) => {

    const navigate = useNavigate();

    const openSinglePost = (item) => {
        navigate(`/${item.title}`)
    }

    return (
        category === 'noticias' ? <Noticias /> : category === 'recomendaciones' ? <Recomendaciones /> : null
    )
}

export default Card

const Recomendaciones = () => {
    const title = "Como y cuando pedir aumento en tu trabajo"
    const description = "Para pedir un aumento de tu sueldo debes de decirle al jefe"
    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require('../../../images/trabajo7.webp')} className="img-fluid" alt="imagen de las racomendaciones" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title. <a href='#'><img alt='icono de abrir' src={abrir} className='mb-1' /></a></h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is.</p>
                        <small className="text-muted border-top w-100 d-flex">4 mins read</small>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-between text-end px-2 py-1 align-items-center w-100'>
                    <div className='d-flex flex-lg-row mx-1 text-start'>
                        <small className='text-primary'>Oct. 06, 2022. </small>
                        <small className='text-secondary'> | by: benito martinez.</small>
                    </div>

                    <div className='d-flex flex-row w-25 justify-content-between align-items-center'>
                        <div className=''><img alt='icono red social twitter' className='icon-sm' src={twitter} /></div>
                        <div className=''><img alt='icono red social facebook' className='icon-sm' src={facebook} /></div>
                        <div className=''><img alt='icono red social instagram' className='icon-sm' src={instagram} /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const Noticias = () => {
    return (
        <div className="card mb-2">
            <img src={require('../../../images/trabajo10.webp')} className="card-img-top" alt="imagen noticia" />
            <div className="card-body">
                <div className='fs-6 fw-bold'>Los empleos mejores pagado en el 2022. <a href='#'><img alt='icono de abrir' src={abrir} className='mb-1' /></a></div>
                <small className="card-text text-secondary ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                <p className="card-text border-top"><small className="text-muted">3m read</small></p>
            </div>
        </div>
    )
}
