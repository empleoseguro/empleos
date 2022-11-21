import React, { useEffect } from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { readingTime } from '../../../utils/functions'
import TitleCard from '../../atoms/TitleCard'
import DescriptionCard from '../../atoms/DescriptionCard'

const CardRecomendaciones = ({ item }) => {

    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate(`/post/${item.id}`)
    }

    useEffect(() => {
        readingTime(item['attributes']?.title + item['attributes']?.description)
    }, [item])

    return (
        <div className="card w-100 mb-2 user-select-none " onClick={() => handleOnClick()}>
            <div className="row g-0">
                <div className="col-md-4 d-flex">
                    <img loading='lazy' src={item['attributes']?.image} className="img-fluid imagen w-100 img-thumbnail" alt="imagen de las racomendaciones" />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                        <TitleCard className="title-recomendaciones fs-5" title={item['attributes']?.title} />
                      
                        <DescriptionCard className="text-recomendaciones text-secondary" description={item['attributes']?.description}/>
                    <small className="text-muted border-top">{readingTime(item['attributes']?.description)} m de lectura</small>
                </div>
                </div>
                <div className='d-flex flex-row justify-content-between text-end px-2 py-1 my-1 align-items-center w-100'>
                    <div className='d-flex flex-lg-row mx-1 text-start'>
                        <small className='text-primary'>{moment(item['attributes']?.publishedAt).format('MMM Do YYYY')}</small>
                        <small className='text-secondary'> | by: {item['attributes']?.autor}.</small>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default CardRecomendaciones