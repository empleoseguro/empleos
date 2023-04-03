import React from 'react'
import './card.css'
import moment from 'moment'
import { readingTime } from '../../../utils/functions'
import TitleCard from '../../atoms/TitleCard'
import DescriptionCard from '../../atoms/DescriptionCard'
import { Link } from 'react-router-dom'
import ImageLazyLoad from '../../atoms/ImageLazyLoad/ImageLazyLoad'

const CardRecomendaciones = ({ item }) => {

    return (
        <Link to={`/post/${item.id}#`} className="mycard shadow bg-light d-flex flex-column user-select-none mb-2 mb-sm-3 text-decoration-none" style={{ cursor: 'pointer' }}>
            <ImageLazyLoad className='img-thumbnail imagen-recomendaciones' src={item['attributes']?.image} alt={`ilusitracion de consejos: ${item['attributes']?.title}`} loading='lazy' />
            <div className='px-2 px-sm-4'>
                <div className='header d-flex flex-row justify-content-between mt-2'>

                    <label className='date fs-6 text-secondary'>{moment(item['attributes']?.publishedAt).format('dddd, MMMM Do YYYY, h a')}</label>
                    <label className='lectura fs-6'>Lectura {readingTime(item['attributes']?.description)}m</label>

                    <label className='autor fs-6 text-secondary'>Kevin Jose</label>

                </div>
                <TitleCard className="title-recomendaciones text-primary mt-1 fs-3" title={item['attributes']?.title} />
                <DescriptionCard className="text-recomendaciones text-secondary mt-2 fs-6" description={item['attributes']?.description} />


            </div>
            <div className='divisor border-bottom mt-3 border-secondary'></div>
            <div className='footer p-3 d-flex justify-content-between align-items-center'>
                <div className='texto-footer'>Leer articulo</div>
                <div className='fw-bold fs-5'>{'>'}</div>
            </div>
        </Link>
    )
}

export default CardRecomendaciones