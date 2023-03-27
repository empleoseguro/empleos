import React from 'react'
import { vectors } from '../../../utils/data'

const PostImage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div>    <img loading='lazy' src={vectors[0].image} className="img-fluid" style={{ objectFit: 'cover', height:'200px', width:'200px' }} alt="imagen del post" /></div>
            <div><a href="https://storyset.com/work" className='fs-5 text-secondary text-end'>Work illustrations by {vectors[0].autor}</a></div>
        </div>
    )
}

export default PostImage
