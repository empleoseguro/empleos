import React from 'react'
import icon from '../../../images/favicon.svg'
import './footer.css'
import { ShareButton } from '../../atoms/ShareButton'
import { useParams } from 'react-router-dom'

const Footer = () => {

    const { section } = useParams()

    return (
        <div className='bg-dark mt-5'>
            <div className='container py-4'>
                <div className='row gy-3'>
                    <div className='col-12 col-md-6 d-flex flex-row align-items-center'>
                        <div className='me-3'>
                            <img loading='lazy' className='icono' alt='logo de la compania' src={icon} />
                        </div>

                        <ShareButton type='facebook' redes />
                        <ShareButton type='twitter' redes />
                        <ShareButton type='whatsapp' redes />
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='row gy-3 row-cols-2'>
                            <a href={section ? validation(section): '/about/politics'} style={{ fontSize: '0.8rem' }} className=' text-light'>Política de privacidad</a>
                            <a href={section ? validation(section): '/about/cookies'} style={{ fontSize: '0.8rem' }} className=' text-light'>Política de cookies</a>
                            <a href={section ? validation(section): '/about/conditions'} style={{ fontSize: '0.8rem' }} className=' text-light'>Condiciones de uso</a>
                            <a href={section ? validation(section): '/about/aboutus'} style={{ fontSize: '0.8rem' }} className=' text-light'>¿Quiénes somos?</a>
                            <a href={section ? validation(section): '/about/contact'} style={{ fontSize: '0.8rem' }} className=' text-light'>Contacto</a>
                        </div>
                    </div>

                </div>

            </div>
            <div className='fs-6 text-center border-top border-secondary  text-light px-1'>© 2022, www.empleoseguro.info. Desarrollado por <a className='text-danger' href="https://www.instagram.com/adprosoft/" rel="noopener">Adprosoft.</a></div>
        </div>
    )
}

const validation = (params) => {
    let dir
    if (params === `empleos/about/${params}`) {
        dir = '#'
    } else {
        dir = `empleos/about/${params}`
    }
    return dir
}
export default Footer