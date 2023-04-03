import React from 'react'
import { info } from '../../../info'
import ImageLazyLoad from '../../atoms/ImageLazyLoad/ImageLazyLoad'
import './portada.css'

const Portada = () => {

    const eslogan = info.eslogan

    return (
        <div id="carouselExampleIndicators" className="carousel slide portada py-2 px1 mt-2 d-flex justify-content-center align-items-center" data-bs-ride="carousel">

            <div className="carousel-inner ">

                {
                    eslogan.map((item, key) => (
                        <div className={`carousel-item ${item.status}`} key={key}>
                            <div className='texto-portada fs-1 p-2 p-sm-0 text-center text-light'>{item.title}</div>
                            <div className='d-flex flex-column w-100 align-items-center d-none d-sm-flex'>
                                <ImageLazyLoad
                                    className='imagen-portada'
                                    alt={`imagen del eslogan: ${item.title}`}
                                    src={item.imagen}
                                    height="200px"
                                    width="1000px"
                                />
                                <a href="https://storyset.com/work" className='text-secondary text-decoration-none'>Work illustrations by Storyset</a>
                            </div>



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