import React, { useEffect } from 'react'
import './card.css'
import moment from 'moment'
import { readingTime } from '../../../utils/functions'
import TitleCard from '../../atoms/TitleCard'
import DescriptionCard from '../../atoms/DescriptionCard'
import { Link } from 'react-router-dom'

const CardRecomendaciones = ({ item }) => {

    useEffect(() => {
        readingTime(item['attributes']?.title + item['attributes']?.description)
    }, [item])

    return (
        <Link to={`/post/${item.id}`} className="mycard shadow bg-light d-flex flex-column user-select-none mb-2 mb-sm-3 text-decoration-none" style={{ cursor: 'pointer' }}>
            <img className='imagen' src={item['attributes']?.image} alt="image card recomendacion" loading='lazy' />
            <div className='px-2 px-sm-4'>
                <div className='header d-flex flex-row justify-content-between mt-2'>
                    <div className='d-flex justify-content-around'>
                        <label className='date fs-6 text-secondary'>28 agosto del 2020</label>
                        <label className='lectura fs-6'>3 min</label>
                    </div>
                    <div>
                        <label className='autor fs-6 text-secondary'>Kevin Jose</label>
                    </div>
                </div>
                <TitleCard className="title-recomendaciones mt-1 fs-3" title={item['attributes']?.title} />
                <DescriptionCard className="text-recomendaciones mt-2 fs-6" description={item['attributes']?.description} />


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