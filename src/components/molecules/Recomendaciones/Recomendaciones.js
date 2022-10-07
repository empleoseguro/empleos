import React from 'react'
import { info } from '../../../info'
import Card from '../../atoms/Card/Card'
import './recomendaciones.css'



const Recomendaciones = () => {

    const recomendaciones = info.data

    return (
        <div className='recomendaciones'>
            <div className=' fs-6 fw-bold text-center w-100 mb-1'>RECOMENDACIONES</div>
            {
                recomendaciones.map((item, key) => (
                    <div key={key}>
                    <Card category={item.category} />
                    </div>
                ))
            }

        </div>

    )
}

export default Recomendaciones