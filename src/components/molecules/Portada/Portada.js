import React from 'react'
import { info } from '../../../info'
import './portada.css'

const Portada = () => {

    const eslogan = info.eslogan

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-inner ">

                {
                    eslogan.map((item, key) => (
                        <div className={`carousel-item ${item.status}`} key={key}>
                            <img className='image' alt={`imagen del eslogan: ${item.title}`} src={require(`../../../images/${item.imagen}`)} />
                            <div className='text-image'>{item.title}</div>
                        </div>
                    ))
                }


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Portada