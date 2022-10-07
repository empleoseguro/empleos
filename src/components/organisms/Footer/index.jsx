import React from 'react'
import icon from '../../../images/favicon.svg'
import facebook from '../../../images/facebook.svg'
import twitter from '../../../images/twitter.svg'
import instagram from '../../../images/instagram.svg'
import './footer.css'
import ButtonIcon from '../../atoms/ButtonIcon'

const Footer = () => {
    return (
        <div className='bg-dark mt-5'>
            <div className='container py-4'>
                <div className='row gy-3'>
                    <div className='col-12 col-md-6 d-flex flex-row align-items-center'>
                        <div className='me-3'>
                            <img className='icono' alt='logo de la compania' src={icon} />
                        </div>

                        <ButtonIcon icon='facebook' />
                        <ButtonIcon icon='twitter' />
                        <ButtonIcon icon='instagram' />
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='row gy-3 row-cols-2'>
                            <a href='#' style={{ fontSize: '0.8rem' }} className=' text-light'>Política de privacidad</a>
                            <a href='#' style={{ fontSize: '0.8rem' }} className=' text-light'>Política de cookies</a>
                            <a href='#' style={{ fontSize: '0.8rem' }} className=' text-light'>Términos de uso</a>
                            <a href='#' style={{ fontSize: '0.8rem' }} className=' text-light'>¿Quiénes somos?</a>
                            <a href='#' style={{ fontSize: '0.8rem' }} className=' text-light'>Contacto</a>
                            <a href='#' style={{ fontSize: '0.8rem' }} className=' text-light'>Puestos laborales</a>
                        </div>
                    </div>

                </div>

            </div>
            <div className='fs-6 text-center border-top border-secondary  text-light px-1'>© 2022, Adprosoft, Inc.</div>
        </div>
    )
}

export default Footer