import React from 'react'
import { vectors } from '../../../utils/data'
import ImageLazyLoad from '../ImageLazyLoad/ImageLazyLoad'

const PostImage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div>
                <ImageLazyLoad
                    src={vectors[0].image}
                    style={{ objectFit: 'cover', height: '200px', width: '200px' }}
                    alt={'imagen refencial al post de empleo'}
                />
                </div>
            <div><a href="https://storyset.com/work" className='fs-5 text-secondary text-decoration-none text-end'>Work illustrations by {vectors[0].autor}</a></div>
        </div>
    )
}

export default PostImage
