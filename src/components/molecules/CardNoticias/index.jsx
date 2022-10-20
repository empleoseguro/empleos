import React from 'react'
import './cardnoticias.css'
import abrir from '../../../images/abrir.svg'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import TitleCard from '../../atoms/TitleCard'
import DescriptionCard from '../../atoms/DescriptionCard'
import { readingTime } from '../../../utils/functions'

const CardNoticias = ({ item }) => {

    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate(`/empleos/post/${item?.id}`)
    }

    return (
        <div className="card mb-2 user-select-none" onClick={() => handleOnClick()}>
            <img loading='lazy' src={item['attributes']?.image} className="card-img-top imagen img-thumbnail" alt="imagen noticia" />
            <div className="card-body">
                <TitleCard className="title-noticias fs-5" title={item['attributes']?.title} />
            <small className="card-text text-secondary text-noticias mt-2" >
                <DescriptionCard description={item['attributes']?.description}/>
            </small>
            <div className='d-flex flex-row mt-1 border-top justify-content-between'>
                <small className="text-muted">{readingTime(item['attributes']?.description)} m de lectura</small>
                <small className='text-primary'>{moment(item['attributes']?.publishedAt).format('MMM Do YYYY')}</small>
            </div>
        </div>
        </div >
    )
}

export default CardNoticias
