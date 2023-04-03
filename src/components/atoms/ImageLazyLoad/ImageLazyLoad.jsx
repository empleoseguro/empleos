import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ImageLazyLoad = ({ src, alt, width, height, className, style, onClick }) => {
    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            style={style}
            effect='blur'
            threshold={0.5}
            width={width ? width : "100%"}
            height={height ? height : "auto"}
            loading='lazy'
            className={`img-fluid ${className}`} 
            onClick={onClick}
            />
    )
}

export default ImageLazyLoad
