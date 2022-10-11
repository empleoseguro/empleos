import React from 'react'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import Twitter from '../../../images/twitter.svg'
import Facebook from '../../../images/facebook.svg'
import Whatsapp from '../../../images/whatsapp.svg'
import './sharebutton.css'
import { useNavigate } from 'react-router-dom';

export const ShareButton = ({ type, redes }) => {

    return (
        <div>
            {
                redes ? <Redes type={type} /> :
                    redComponent(type)
            }
        </div>
    )
}

export const Redes = ({ type }) => {


    const validate = (type) => {
        let link
        let icon
        if (type === 'facebook') {
            link = 'https://www.facebook.com'
            icon = Facebook
        } else if (type === 'whatsapp') {
            icon = Whatsapp
            link = 'https://www.whatsapp.com'
        } else {
            icon = Twitter
            link = 'https://www.twitter.com'
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


export const redComponent = (type) => {
    let red
    switch (type) {
        case 'facebook':
            red = <FacebookShareButton
                url={"https://peing.net/ja/"}
                quote={"フェイスブックはタイトルが付けれるようです"}
                hashtag={"#empleoseguro"}
                description={"share in facebook"}
            >
                <img
                    loading='lazy'
                    src={Facebook}
                    alt='icono de facebook'
                    className='socialIconsFooterPost' />
            </FacebookShareButton>
            break;

        case 'twitter':
            red = <TwitterShareButton
                title={"Title"}
                url={"https://empleoseguro.github.io/empleos"}
                hashtags={["empleo", "trabajoEnCasa"]}
            >
                <img
                    loading='lazy'
                    src={Twitter}
                    alt={`icono de twitter`}
                    className='socialIconsFooterPost' />
            </TwitterShareButton>
            break;
        case 'whatsapp':
            red = <WhatsappShareButton
                title='Consegui un empleo rapido gracias a este maravilloso sitio,
                 los mejores consejos, tienen las mejores recomendaciones en el ambito labora, me ha ayudado mucho! '
                separator='http://empleoseguro.github.io/empleos'
            >
                <img loading='lazy'
                    src={Whatsapp}
                    alt='icono de whatsapp'
                    className='socialIconsFooterPost'
                />
            </WhatsappShareButton>
            break;
        default:
            break;
    }

    return red
}



