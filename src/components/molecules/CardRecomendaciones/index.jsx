import React, { useEffect } from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'
import twitter from '../../../images/twitter.svg'
import facebook from '../../../images/facebook.svg'
import instagram from '../../../images/instagram.svg'
import abrir from '../../../images/abrir.svg'
import moment from 'moment'
import { readingTime } from '../../../utils/functions'

const CardRecomendaciones = ({ item }) => {

    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate(`/empleos/post/${item.id}`)
    }

    useEffect(() => {
        readingTime(item['attributes']?.title + item['attributes']?.description)
    }, [])
    

    return (
        <div className="card w-100 mb-2" onClick={() => handleOnClick()}>
            <div className="row g-0">
                <div className="col-md-4 d-flex">
                    <img loading='lazy' src={item['attributes']?.image} className="img-fluid imagen" alt="imagen de las racomendaciones" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="title-recomendaciones card-title m-0 mb-1">{item['attributes']?.title}<a href='#'><img loading='lazy' alt='icono de abrir' src={abrir} className='' /></a></h5>
                        <p className="card-text text-recomendaciones">{item['attributes']?.description}</p>
                        <small className="text-muted border-top w-100 d-flex"><span id='time'></span> m de lectura</small>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-between text-end px-2 py-1 align-items-center w-100'>
                    <div className='d-flex flex-lg-row mx-1 text-start'>
                        <small className='text-primary'>{moment(item['attributes']?.publishedAt).format('MMM Do YYYY')}</small>
                        <small className='text-secondary'> | by: {item['attributes']?.autor}.</small>
                    </div>
                    <div className='d-flex flex-row w-25 justify-content-between align-items-center'>
                        <div className=''><img loading='lazy' alt='icono red social twitter' className='icon-sm' src={twitter} /></div>
                        <div className=''><img loading='lazy' alt='icono red social facebook' className='icon-sm' src={facebook} /></div>
                        <div className=''><img loading='lazy' alt='icono red social instagram' className='icon-sm' src={instagram} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardRecomendaciones