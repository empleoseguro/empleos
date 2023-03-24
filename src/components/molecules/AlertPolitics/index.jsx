import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './alertpolitics.css'
import { Link } from 'react-router-dom'
import logo from '../../organisms/NavBar/favicon.svg'
import Cookies from 'js-cookie'


const AlertPolitics = () => {
    return (
        <CookiesPrivacy />
    )
}

const CookiesPrivacy = () => {
    const [statusAlert, setstatusAlert] = useState(false)
    const [modalCookiesConfig, setmodalCookiesConfig] = useState(false)
    const [statusBanner, setstatusBanner] = useState('show')
    const [visibilityBanner, setvisibilityBanner] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('cookies-acept')) {
            setvisibilityBanner(true)
        }
    }, [])


    // console.log(cookies.getAll({ path: '/' }))

    const aceptCookies = () => {
        aceptCookiesTerceros()
        localStorage.setItem('cookies-acept', true)
        window.dataLayer.push({ 'event': 'acept-analytics' })
        setvisibilityBanner(false)
        setstatusBanner('fade')
    }

    const aceptCookiesTerceros = () => {
        console.log('llega a cookies de terceros pa')
        Cookies.set('INFOLINKS', 'infolinks.com', { path: '/' })
    }

    const denegateCookies = () => {
        setstatusBanner('fade')
        setvisibilityBanner(false)
        return
    }

    return (
        visibilityBanner ?
            <>
                <div className='modal-banner  fixed-top p-1 w-100' tabIndex="-1">
                    <div className='px-lg-5 mx-lg-5'>
                        <div className='container-banner botder-0 d-flex p-0 mt-2 mx-lg-5 flex-column  rounded d-block  bg-light text-dark j
        ustify-content-center border shadow mh-50'>
                            <div className='header-banner rounded-top px-4 py-2 text-light d-flex align-items-center justify-content-between'>
                                <div>
                                    <img className='logo' src={logo} loading="lazy" alt='logo' /> mpleo seguro
                                </div>
                                <div className='fw-bold fs-6 text-light' style={{ cursor: 'pointer' }}>X</div>
                            </div>
                            <div className='body-banner px-3 py-2'>
                                <p className='fw-bold'>Nota informativa</p>
                                <p>  Nosotros y terceros seleccionados utilizamos cookies o tecnologías similares con fines técnicos y, con su consentimiento, para otras finalidades según se especifica en la <Link className='a-banner' to='about/cookies'>políticas de cookies</Link>.
                                    Denegar el consentimiento puede provocar que las características relacionadas no estén disponibles.</p>
                                <p>
                                    Utilice el botón “Aceptar” para dar su consentimiento. Utilice el botón “Rechazar” o cierre esta nota informativa para
                                    continuar sin aceptar. Puede desactivarlas y configurar en cualquier momento. <a className='a-banner' onClick={() => setstatusAlert(true)}>ajustes</a>.
                                </p>
                            </div>
                            <div className='footer-banner d-flex justify-content-between mx-3 mb-3'>
                                <div className=''>
                                    <button className='btn btn-secondary rounded-pill fw-bold' onClick={() => setmodalCookiesConfig(true)}>Saber más y personalizar</button>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <button className='btn btn-primary rounded-pill me-3 fw-bold' onClick={aceptCookies}>Aceptar</button>
                                    <button className='btn btn-primary rounded-pill fw-bold' onClick={denegateCookies}>Rechazar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {
                    modalCookiesConfig ? <DetailsCookiesPrivacy setmodalCookiesConfig={setmodalCookiesConfig} aceptCookies={aceptCookies} denegateCookies={denegateCookies} />
                        : null
                }
            </>
            : null
    )
}



const DetailsCookiesPrivacy = ({ aceptCookies, denegateCookies, cookies, setmodalCookiesConfig }) => {
    const { infolinks_com } = cookies

    const [infolinks, setinfolinks] = useState(null)

    useEffect(() => {
        setinfolinks(infolinks_com)
    }, [cookies])



    const onChangeCookies = (e) => {
        console.log(e.target.value)
    }

    let setmycookies
    let setCookies
    //asdas
    return (
        <div className='modal-banner  fixed-top p-1 w-100' tabIndex="-1">
            <div className='px-lg-4 mx-lg-4'>
                <div className='px-lg-5 mx-lg-5'>
                    <div className='px-lg-5 mx-lg-5'>
                        <div className='container-banner border-0 d-flex p-0 mt-4 mx-lg-5 flex-column rounded d-block  bg-light text-dark justify-content-center border shadow'>
                            <div className='header-banner border-bottom border-secondary rounded-top px-5 py-4 fs-5 text-light d-flex align-items-center justify-content-between'>
                                <div className='d-flex flex-row'>
                                    <div className='logo-container'>
                                        <img className='logo' src={logo} loading="lazy" alt='logo' />

                                    </div>mpleo seguro
                                </div>
                                <div className='fw-bold fs-5 text-light' style={{ cursor: 'pointer' }}>
                                    <button className='btn btn-outline-light'>Ver la política de Cookies completa</button>
                                </div>
                            </div>
                            <div className='body-banner'>
                                <div className='text-banner text-light px-4 pt-2 pb-2'>
                                    <h1 className='fw-bold mb-2'>Sus opciones de privacidad</h1>
                                    <p className='text-dark'>  En este panel puede expresar algunas preferencias relacionadas con el tratamiento de sus datos personales.
                                        Puede revisar y modificar las elecciones realizadas en cualquier momento volviendo a mostrar este panel a través del enlace proporcionado.
                                        <br />
                                        Para denegar su consentimiento de las actividades de tratamiento específicas descritas a continuación, cambie los botones de activado
                                        a desactivado o utilice el botón de “Rechazar todo” y confirme que quiere guardar sus elecciones.</p>
                                </div>
                                <div className='buttons-all d-flex justify-content-end my-2 bg-light py-4 shadow-sm'>
                                    <button className='btn btn-outline-secondary rounded-pill mx-1 fw-bold'
                                        onClick={() => {
                                            aceptCookies()
                                            setmodalCookiesConfig(false)

                                        }}>Aceptar todo</button>
                                    <button className='btn btn-outline-secondary rounded-pill mx-1 fw-bold'
                                        onClick={() => {
                                            denegateCookies()
                                            setmodalCookiesConfig(false)

                                        }
                                        }>Rechazar todo</button>
                                </div>


                                <div className='px-4'>
                                    <h5 className='text-dark'> Sus preferencias de consentimiento para tecnologías de seguimiento</h5>
                                    <p className="fs-6">
                                        Las opciones proporcionadas en esta sección le permiten personalizar sus preferencias de consentimiento para cualesquiera
                                        tecnologías de seguimiento utilizadas para las finalidades descritas a continuación. Para obtener más información sobre cómo
                                        nos ayudan estos rastreadores y cómo funcionan, consulte la política de cookies. Por favor tenga en cuenta que denegar el
                                        consentimiento para una finalidad concreta puede provocar que las características relacionadas no estén disponibles.
                                    </p>

                                    <p className="fs-6">
                                        <div className='title-option d-flex justify-content-between align-items-center mb-2'>
                                            <label className='fs-5 fw-bold'>
                                                Necesarios
                                            </label>
                                            <div class="form-check form-switch ">
                                                <input class="checkbox-banner form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" disabled checked style={{ width: 60, height: 30 }} />

                                            </div>
                                        </div>
                                        <p className="fs-6">Estos rastreadores se utilizan para actividades que son estrictamente necesarias para gestionar o
                                            prestar el servicio que usted nos ha solicitado y, por tanto, no exigen su consentimiento.</p>
                                        <div className='title-option d-flex justify-content-between align-items-center mb-2'>
                                            <label className='fs-5 fw-bold'>
                                                Funcionalidad
                                            </label>
                                            <div class="form-check form-switch ">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked style={{ width: 60, height: 30 }} />

                                            </div>
                                        </div>
                                        <p className="fs-6">Estos rastreadores hacen posibles interacciones y funcionalidades básicas que le permiten acceder
                                            a determinadas características de su servicio y facilitan su comunicación con nosotros.</p>
                                        <div className='title-option d-flex justify-content-between align-items-center mb-2'>
                                            <label className='fs-5 fw-bold'>
                                                Experiencia
                                            </label>
                                            <div class="form-check form-switch ">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked style={{ width: 60, height: 30 }} />

                                            </div>
                                        </div>
                                        <p className="fs-6">Estos rastreadores nos ayudan a mejorar la calidad de su experiencia de usuario y permiten la interacción
                                            con los contenidos, las redes y las plataformas externos.</p>
                                        <div className='title-option d-flex justify-content-between align-items-center mb-2'>
                                            <label className='fs-5 fw-bold'>
                                                Medición
                                            </label>
                                            <div class="form-check form-switch ">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked style={{ width: 60, height: 30 }} />

                                            </div>
                                        </div>
                                        <p className="fs-6">Estos rastreadores nos ayudan a medir el tráfico y a analizar su comportamiento con el fin de mejorar nuestro
                                            servicio.</p>
                                        <div className='title-option d-flex justify-content-between align-items-center mb-2'>
                                            <label className='fs-5 fw-bold'>
                                                Marketing
                                            </label>
                                            <div class="form-check form-switch ">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked style={{ width: 60, height: 30 }} />

                                            </div>
                                        </div>
                                        <p className="fs-6">Estos rastreadores nos ayudan a entregarle anuncios o contenidos promocionales personalizados, y a medir
                                            su rendimiento.</p>
                                    </p>
                                </div>

                            </div>
                            <div className='footer-banner d-flex justify-content-between align-items-center pt-3 mx-3 mb-3'>
                                <div className=''>
                                    <button className='btn btn-outline-secondary fw-bold' onClick={() => setmodalCookiesConfig(false)}>{'< Volver'}</button>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <button className='btn text-light rounded-pill me-3 fw-bold button-corp' onClick={aceptCookies}>Guardar y continuar</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertPolitics
