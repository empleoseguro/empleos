import React, { useEffect, useState } from 'react'
import './cardnoticias.css'
import moment from 'moment'
import TitleCard from '../../atoms/TitleCard'
import DescriptionCard from '../../atoms/DescriptionCard'
import { readingTime } from '../../../utils/functions'
import { Link } from 'react-router-dom'
import ImageLazyLoad from '../../atoms/ImageLazyLoad/ImageLazyLoad'

const CardNoticias = ({ item }) => {
    const [first, setfirst] = useState(null)

    useEffect(() => {
        setfirst(`/post/${item?.id}`)
    }, [item])

    return (
        <Link to={first} className="text-decoration-none">
            <div className="d-flex bg-light flex-column w-100 user-select-none mb-2 mb-sm-3" style={{ cursor: 'pointer' }}>
                <ImageLazyLoad
                    src={item['attributes']?.image}
                    className="img-thumbnail"
                    alt={`imagen referencial a ${item['attributes']?.title}`}
                />
                <div className="px-3 py-2">
                    <TitleCard className="fs-5 text-primary" title={item['attributes']?.title} />
                    <small className="card-text text-secondary text-noticias mt-1" >
                        <DescriptionCard description={item['attributes']?.description} />
                    </small>
                    <div className='d-flex flex-row mt-1 border-top justify-content-between pt-1'>
                        <small className="lectura">{readingTime(item['attributes']?.description)} m de lectura</small>
                        <small className='text-secondary'>{moment(item['attributes']?.publishedAt).format('dd, MMMM Do YYYY')}</small>
                    </div>
                </div>
            </div >
        </Link>
    )
}

export default CardNoticias
