import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './alertpolitics.css'



const AlertPolitics = () => {
    return (
        <CookiesPrivacy />
    )
}

const CookiesPrivacy = () => {
    const [statusAlert, setstatusAlert] = useState('show')

    const aceptCookies = () => {
        localStorage.setItem('cookies-acept', true)
    }

    return (
        !localStorage.getItem('cookies-acept') ?
            <div className={`d-flex justify-content-center align-items-center alert alert-warning ${statusAlert} m-0 border-0 rounded-0 text-center position-fixed bottom-0 w-100 bg-dark text-light cookiesprivacy`}>
                <div>
                    Utilizamos cookies para ofrecerte la mejor experiencia en nuestra web.
                    <br />
                    Puedes aprender más sobre qué cookies utilizamos o desactivarlas en los <a href='#'>ajustes</a>.
                </div>
                <button className='btn btn-primary m-2' onClick={aceptCookies}>Aceptar</button>
            </div> : null
    )
}



const DetailsCookiesPrivacy = ({ mycookies, setCookies }) => {

    return (
        <div
            className="modal"
            style={{ display: 'block', position: 'fixed' }}
        >
            <Modal.Dialog >
                <Modal.Header closeButton className='bg-dark text-light'>
                    <Modal.Title>Resumen de privacidad</Modal.Title>
                </Modal.Header>

                <Modal.Body className='bg-dark text-light'>
                    <p>Esta web utiliza cookies para que podamos ofrecerte la mejor experiencia de usuario posible. La información de las cookies se almacena en tu navegador y realiza funciones tales como reconocerte cuando vuelves a nuestra web o ayudar a nuestro equipo a comprender qué secciones de la web encuentras más interesantes y útiles.</p>

                    <p>
                        Esta web utiliza Google Analytics para recopilar información anónima tal como el número de visitantes del sitio, o las páginas más populares.
                        Dejar esta cookie activa nos permite mejorar nuestra web.
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
