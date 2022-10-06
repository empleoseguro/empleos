import React, { useState } from 'react'
import BaseTemplate from '../../templates/BaseTemplate'
import './formulario.css'

const Formulario = () => {

    const [localidad, setLocalidad] = useState({})
    const [puesto, setPuesto] = useState({})
    const [disabled, setdisabled] = useState(true)

    setTimeout(function(){
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

    return (
        <BaseTemplate>
            <div className='anuncio w-100 bg-secondary text-dark text-center py-5 mb-2 text-center rounded'>
                anuncio caiman
            </div>
            <div className='container bg-light py-2 mb-2'>
                <form onSubmit={handleOnSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <small className='text-secondary'> *</small>
                        <input type="text" name='name' class="form-control" id="exampleFormControlInput1" placeholder="Mario Ejemplo" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Localidad</label>
                        <select name='localidad' onChange={handleOnChange} class="form-select">
                            <option selected>Selecciona tu país</option>
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

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Puesto a desear</label>
                        <small className='text-secondary'> *</small>
                        <input
                            name='puesto'
                            onChange={handleOnChange}
                            type="text" class="form-control"
                            placeholder="Herrer@, niñer@, cociner@..." />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Información</label>
                        <small className='text-secondary'> opcional</small>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className='d-flex justify-content-center mb-2'>
                        <button disabled={disabled} type="button" class="boton btn btn-lg text-center" onClick={handleOnSubmit}>Aplicar puesto</button>

                    </div>
                </form>
            </div>
        </BaseTemplate>
    )
}

export default Formulario
