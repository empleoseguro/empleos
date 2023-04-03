import React from 'react'
import ImageLazyLoad from '../ImageLazyLoad/ImageLazyLoad'


const ImageCard = ({src, className}) => {
  return (
   <>
    <ImageLazyLoad className={className} src={src} alt='imagen de cards empleo seguro'/>
   </>
  )
}

export default ImageCard
