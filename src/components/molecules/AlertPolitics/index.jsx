import React, { useState } from 'react'
import './alertpolitics.css'



const AlertPolitics = () => {
    const [modal, setmodal] = useState(true)

    localStorage.setItem('mymodal', true);
   

    const closeModal = () => {
        localStorage.setItem('mymodal', false);
        setmodal(false)
    }

    return (
      modal
            ? <div className='backgroundmodal' onClick={() => closeModal()}>
                <div className='mymodal px-4 pb-3 py-1 flex-column d-flex align-items-center'>
                    <h5 className='w-100'>Politicas y cookies</h5>
                    <p> Al seguir navegando en nuestro sitio usted acepta nuestras
                        <a href='/about/politics'>Politicas, Condicion de uso y Cookies.</a> Utilizamos cookies propias y de terceros durante la navegación por el sitio web, con la finalidad de
                        permitir el acceso a las funcionalidades de la página web, extraer estadísticas de tráfico y mejorar
                        la experiencia del usuario. Puedes aceptar todas las cookies, así como seleccionar cuáles deseas
                        habilitar o configurar sus preferencias. Para más información, puede consultar
                        nuestra Política de cookies</p>
                    <button type="button" class="btn btn-primary w-25">Aceptar</button>
                </div>
            </div> : null
    )
}

export default AlertPolitics
