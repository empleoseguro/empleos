import React from 'react'
import './buttonicon.css'
import Twitter from '../../../images/twitter.svg'
import Facebook from '../../../images/facebook.svg'
import Instagram from '../../../images/instagram.svg'

const ButtonIcon = ({ icon, className }) => {

    const handleOnClick = (icon) => {
        window.open(`https://${icon}.com/`)
    }

    return (
        <div className='buttonicon'>
            <img
             src={icontype(icon)} 
             alt={`icono de ${icontype(icon)}`} 
             className={className ? className : 'socialIconsFooterPost'} />
        </div>
    )
}

const icontype = (type) => {
    let icon
    switch (type) {
        case 'twitter':
            icon = Twitter
            break;
        case 'instagram':
            icon = Instagram
            break;
        case 'facebook':
            icon = Facebook
            break;
        default:
            icon = Instagram
            break;
    }
    return icon
}

export default ButtonIcon
