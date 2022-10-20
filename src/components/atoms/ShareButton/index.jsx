import React from 'react'
import Facebook from '../../../images/facebook.svg'
import Instagram from '../../../images/instagram.svg'
import Whatsapp from '../../../images/whatsapp.svg'
import './sharebutton.css'


export const ShareButton = ({ type, redes }) => {

    return (
        <div>
            {
                redes && <Redes type={type} /> 
            }
        </div>
    )
}

export const Redes = ({ type }) => {
    const validate = (type) => {
        let link
        let icon
        if (type === 'facebook') {
            link = 'https://www.facebook.com/vidasinmaduro/'
            icon = Facebook
        } else if (type === 'whatsapp') {
            icon = Whatsapp
            link = 'https://www.whatsapp.com'
        } else {
            icon = Instagram
            link = 'https://www.instagram.com/empleoseguroes/'
        }
        return { icon, link }
    }

    const handleOnClick = (link) => {
        window.open(link, '_blank')
    }

    return (
        <img
            loading='lazy'
            alt={`logo de red social ${type}`}
            src={validate(type).icon}
            onClick={() => handleOnClick(validate(type).link)}
            className='socialIconsFooterPost'
        />
    )
}