import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Cookies from 'universal-cookie'
import './alertpolitics.css'
import { Link } from 'react-router-dom'



const AlertPolitics = () => {
    return (
        <CookiesPrivacy />
    )
}

const CookiesPrivacy = () => {
    const [statusAlert, setstatusAlert] = useState(false)
    const [statusBanner, setstatusBanner] = useState('show')

    const cookies = new Cookies()

    console.log(cookies.getAll({ path: '/' }))

    const aceptCookies = () => {
        localStorage.setItem('cookies-acept', true)
        cookies.set('infolinks_com', 'cookies', { path: '/' });

        setstatusBanner('fade')
    }

    const denegateCookies = () => {
        cookies.remove('infolinks.com', { path: '/' })
        setstatusBanner('fade')
        return
    }

    return (
        !localStorage.getItem('cookies-acept') ?
            <>
                <Modal.Dialog className="modal d-block fixed-top rounded" tabindex="-1">


                    <Modal.Body className='bg-dark text-light p-4 rounded'>
                        Al hacer clic en "Aceptar", usted reconoce que ha leído y entendido nuestras <Link className='a-banner' to='about/politics'>políticas de privacidad</Link>.
                        <br />
                        así como también consiente el uso de <Link className='a-banner' to='about/cookies'>cookies</Link> de terceros para mejorar su navegación en nuestro sitio. 
                        {/* <a href='#' onClick={() => setstatusAlert(true)} className='a-banner'>ajustes</a>. */}
                        <div className='text-end mt-3'>
                            <Button onClick={aceptCookies}>Aceptar</Button>
                            <Button className='btn btn-secondary m-2' onClick={denegateCookies}>Rechazar</Button>
                        </div>

                    </Modal.Body>





                </Modal.Dialog>
                <DetailsCookiesPrivacy show={statusAlert} setShow={setstatusAlert} aceptCookies={aceptCookies} denegateCookies={denegateCookies} />
            </>
            : null
    )
}



const DetailsCookiesPrivacy = ({ show, setShow, aceptCookies, denegateCookies, cookies }) => {
    let mycookies
    let setmycookies
    let setCookies
    //asdas
    return (
        <div
            className={`modal ${show ? 'd-block' : 'd-none'}`}
        >
            <Modal.Dialog >
                <Modal.Header className='bg-dark text-light'>
                    <Modal.Title>Resumen de privacidad</Modal.Title>
                    <div className='fs-5 fw-bold text-danger me-2 ' style={{ cursor: 'pointer' }} onClick={() => setShow(false)}>X</div>
                </Modal.Header>

                <Modal.Body className='bg-dark text-light'>
                    <p>Esta web utiliza cookies para que podamos ofrecerte la mejor experiencia de usuario posible. La información de las cookies se almacena en tu navegador y realiza funciones tales como reconocerte cuando vuelves a nuestra web o ayudar a nuestro equipo a comprender qué secciones de la web encuentras más interesantes y útiles.</p>

                    <p>
                        Esta web utiliza Google Analytics para recopilar información anónima tal como el número de visitantes del sitio, o las páginas más populares.
                        Dejar esta cookie activa nos permite mejorar nuestra web. Ver
                        <Link to="about/politics" className='text-primary'> Politicas de privacidad</Link>.
                    </p>



                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={mycookies} onClick={() => setCookies(!mycookies)} />
                        <label class="form-check-label" for="flexSwitchCheckChecked">{mycookies ? "activadas" : "desactivadas"}</label>
                    </div>
                </Modal.Body>


                <Modal.Footer className='bg-dark text-light'>
                    <Button variant="secondary">Cerrar</Button>
                    <Button variant="primary">Aceptar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default AlertPolitics
