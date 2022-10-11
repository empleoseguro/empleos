import React from 'react'
import './cardnoticias.css'
import abrir from '../../../images/abrir.svg'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const CardNoticias = ({ item }) => {

    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate(`/empleos/post/${item?.id}`)
    }


    return (
        <div className="card mb-2" onClick={() => handleOnClick()}>
            <img loading='lazy' src={item['attributes']?.image} className="card-img-top imagen" alt="imagen noticia" />
            <div className="card-body">
                <div className='title-noticias fs-6 fw-bold'>{item['attributes']?.title}<a href='#'>
                    <img loading='lazy' alt='icono de abrir' src={abrir} className='mb-1' /></a>
                </div>
                <small className="card-text text-secondary text-noticias mt-2">{item['attributes']?.description}</small>
                <div className='d-flex flex-row mt-3 border-top justify-content-between'>
                <small className="text-muted"><span id='time'></span> m de lectura</small>
                    <small className='text-primary'>{moment(item['attributes']?.publishedAt).format('MMM Do YYYY')}</small>
                </div>

            </div>
        </div>
    )
}

export default CardNoticias
