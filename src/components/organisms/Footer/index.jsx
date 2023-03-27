import React from 'react'
import icon from '../../../images/favicon.svg'
import './footer.css'
import { ShareButton } from '../../atoms/ShareButton'
import { Link, useParams } from 'react-router-dom'

const Footer = () => {

    const { section } = useParams()

    return (
        <div className='bg-dark mt-5'>
            <div className='mx-sm-5 d-flex justify-content-around py-4'>
                <div className='d-flex flex-column flex-sm-row '>
                    <div className='d-flex flex-row align-items-center w-sm-50'>
                        <div className='me-3'>
                            <img loading='lazy' className='icono' alt='logo de la compania' src={icon} />
                        </div>

                        <ShareButton type='facebook' redes />
                        <ShareButton type='twitter' redes />
                        <ShareButton type='whatsapp' redes />
                    </div>
                    <div className='w-sm-50'>
                        <div className=''>
                            <Link to="about/politics" style={{ fontSize: '0.8rem' }} className=' text-light fs-6 text-decoration-none'>Política de privacidad</Link>
                            <Link to="about/cookies" style={{ fontSize: '0.8rem' }} className=' text-light fs-6 text-decoration-none'>Política de cookies</Link>
                            <Link to="about/conditions" style={{ fontSize: '0.8rem' }} className=' text-light fs-6 text-decoration-none'>Condiciones de uso</Link>
                            <Link to="about/aboutus" style={{ fontSize: '0.8rem' }} className=' text-light fs-6 text-decoration-none'>¿Quiénes somos?</Link>
                            <Link to="about/contact" style={{ fontSize: '0.8rem' }} className=' text-light fs-6 text-decoration-none'>Contacto</Link>
                        </div>
                    </div>

                </div>

            </div>
            <div className='fs-6 text-center border-top border-secondary  text-light px-1'>© 2022, www.empleoseguro.tech. Desarrollado por <a className='text-danger' href="https://www.instagram.com/adprosoft/" rel="noopener">Adprosoft.</a></div>
        </div>
    )
}

const validation = (params) => {
    //hey mor
    let dir
    if (params === `empleos/about/${params}`) {
        dir = '#'
    } else {
        dir = `empleos/about/${params}`
    }
    return dir
}
export default Footer