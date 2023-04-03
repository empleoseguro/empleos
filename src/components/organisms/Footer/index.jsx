import React from 'react'
import icon from '../../../images/favicon.svg'
import './footer.css'
import { ShareButton } from '../../atoms/ShareButton'
import { Link } from 'react-router-dom'
import ImageLazyLoad from '../../atoms/ImageLazyLoad/ImageLazyLoad'

const Footer = () => {

    return (
        <div className='bg-dark mt-3'>
            <div className='mx-sm-5 mt-2 d-flex align-items-center justify-content-sm-around flex-column flex-sm-row py-4'>
                <div className='d-flex flex-row align-items-center'>
                    <div className='me-3'>
                        <ImageLazyLoad className='icono' alt='Logo de Empleo Seguro: Tu guía laboral en línea' src={icon} />
                    </div>
                    <ShareButton type='facebook' redes />
                    <ShareButton type='twitter' redes />
                    <ShareButton type='whatsapp' redes />
                </div>
                <div className='w-sm-50 mt-3'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column pe-2 border-end border-secondary'>
                            <Link to="about/politics" style={{ fontSize: '0.8rem' }} className=' text-light text-decoration-none fs-5'>Política de privacidad</Link>
                            <Link to="about/cookies" style={{ fontSize: '0.8rem' }} className=' text-light text-decoration-none fs-5'>Política de cookies</Link>
                            <Link to="about/conditions" style={{ fontSize: '0.8rem' }} className=' text-light text-decoration-none fs-5'>Condiciones de uso</Link></div>
                        <div className='d-flex flex-column ms-2'>
                            <Link to="about/aboutus" style={{ fontSize: '0.8rem' }} className=' text-light text-decoration-none fs-5'>Sobre nosotros</Link>
                            <Link to="about/contact" style={{ fontSize: '0.8rem' }} className=' text-light text-decoration-none fs-5'>Contacto</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fs-6 text-center border-top border-secondary  text-light px-1'>© 2022, www.empleoseguro.tech. Desarrollado por <a className='text-danger' href="https://www.instagram.com/adprosoft/" rel="noopener">Adprosoft.</a></div>
        </div>
    )
}

export default Footer