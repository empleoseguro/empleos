import React from 'react'
import './card.css'

const Card = () => {
  return (
      <div className='card text-start shadow-sm rounded'>
        <img className='image-lg' src={require('../../../images/trabajo8.webp')} />
        <div className='text-image fs-3 p-2'>Estas son las mejores estrategias para conseguir empleo rapidamente.</div>
      </div>
  )
}

export default Card
