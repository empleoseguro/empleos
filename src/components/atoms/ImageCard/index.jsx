import React from 'react'


const ImageCard = ({src, className}) => {
  return (
   <>
    <img className={className} src={src} alt='imagen de cards' loading='lazy'/>
   </>
  )
}

export default ImageCard
