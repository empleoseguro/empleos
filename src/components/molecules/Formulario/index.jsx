import React, { useState } from 'react'
import AnuncioText from '../../atoms/AnuncioTest/AnuncioText'
import Sidebar from '../Sidebar'
import './formulario.css'

const Formulario = ({ data }) => {

    const [localidad, setLocalidad] = useState({})
    const [puesto, setPuesto] = useState({})
    const [disabled, setdisabled] = useState(true)
    const [status_alert, setstatus_alert] = useState('d-none')

    setTimeout(function () {
        setdisabled(false)
    }, 60000);

    const handleOnChange = (e) => {
        const name = e.target.name
        const valor = e.target.value

        setLocalidad({ ...localidad, [name]: valor })
        setPuesto({ ...puesto, [name]: valor })

    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        window.open(`https://www.google.com/search?q=empleo ${puesto.puesto} ${localidad && localidad.localidad}&hl=es&btnG=B%C3%BAsqueda+Google`)
    }

    const handleAlert = () => {
        if (status_alert === 'd-none') {
            setstatus_alert('d-flex')
        }else{
            setstatus_alert('d-none')
        }
        return
    }

    return (
        <>
            <div className='portada-form justify-content-around align-items-center d-flex flex-column flex-sm-row px-sm-3 mt-2 bg-dark'>
                <div className='d-flex flex-column w-50  align-items-center'>
                    <div className='fs-1 fw-bold text-center portada-text '>¡Aquí está tu oportunidad de brillar!</div>
                    <div className='d-none d-sm-flex fs-6 text-secondary'>¡Iniciar la búsqueda de empleo nunca ha sido tan fácil! Simplemente completa los campos requeridos en nuestro formulario y estás listo para comenzar. Nosotros nos encargaremos de hacer coincidir tus habilidades y experiencia con las mejores oportunidades de trabajo disponibles. ¡No esperes más para dar el primer paso hacia tu próximo trabajo soñado!</div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center w-sm-25'>
                    <img className='imagen-form' src='https://i.ibb.co/PjM850C/Making-art-pana.png' alt='formulario para conseguir trabajo' loading='lazy' />
                    <a href="https://storyset.com/work" className='text-decoration-none text-secondary w-100'>Work illustrations by Storyset</a>
                </div>

            </div>
            <div className='container-fluid bg-light d-flex flex-column justify-content-between flex-sm-row pt-2'>
                <div className='d-none d-sm-flex ps-sm-5 w-sm-25'>
                <Sidebar mostViewed={data}/>
                </div>
                <div className="w-100 w-sm-50 px-sm-5">
                    <div className={`${status_alert} alert alert-warning`}>Es importante que sepas que al completar nuestro formulario de búsqueda de empleo, no podemos garantizar que encontrarás trabajo a través de nuestro servicio. Sin embargo, nuestro equipo de profesionales trabajará arduamente para ayudarte a encontrar las mejores oportunidades de empleo disponibles. Al enviar tu formulario, aceptas nuestras políticas y condiciones de uso, incluyendo la recolección y uso de tus datos personales. Nuestra prioridad es proteger tu privacidad y asegurarnos de que tus datos estén seguros. Te recomendamos que leas cuidadosamente nuestros términos y condiciones antes de enviar el formulario, y si tienes alguna pregunta o inquietud, no dudes en contactarnos. Estamos aquí para ayudarte en tu búsqueda de empleo.<button type="button" className="btn-close" onClick={handleAlert} data-bs-dismiss="alert" aria-label="Close"></button></div>
                    <div className={`justify-content-end fs-5 text-secondary text-end cursor-pointer`} onClick={handleAlert}><div className='rounded px-1'>Info</div></div>
                    <form onSubmit={handleOnSubmit} className="d-flex flex-column">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fs-4">Nombre</label>
                            <small className='text-secondary'> *</small>
                            <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Mario Ejemplo" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fs-4">Localidad</label>
                            <select value="" name='localidad' onChange={handleOnChange} className="form-select">
                                <option>Selecciona tu país</option>
                                <option value="estados unidos">Estados Unidos</option>
                                <option value="españa">España</option>
                                <option value="puerto rico">Puerto Rico</option>
                                <option value="chile">Chile</option>
                                <option value="colombia">Colombia</option>
                                <option value="peru">Perú</option>
                                <option value="argentina">Argentina</option>
                                <option value="brasil">Brasil</option>
                                <option value="mexico">México</option>
                                <option value="panama">Panamá</option>
                                <option value="republica dominicana">República Dominicana</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fs-4">Puesto a desear</label>
                            <small className='text-secondary'> *</small>
                            <input
                                name='puesto'
                                onChange={handleOnChange}
                                type="text" className="form-control"
                                placeholder="Herrer@, niñer@, cociner@..." />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label fs-4">Información</label>
                            <small className='text-dark'> (opcional)</small>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className='d-flex justify-content-center mb-2'>
                            <button disabled={disabled} type="button" className="boton btn btn-lg text-center" onClick={handleOnSubmit}>Aplicar puesto</button>

                        </div>
                    </form>
                </div>
                <div className='w-25 w-sm-25 pe-sm-5'><AnuncioText/></div>
            </div>
        </>
    )
}

export default Formulario
