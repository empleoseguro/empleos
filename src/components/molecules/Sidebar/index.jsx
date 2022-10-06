import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-auto h-50 rounded ms-1'>
            <div className='text-center bg-light' style={{ height: 400 }}>anuncio boleta</div>
            <div className='bg-light px-1'>
                <div className='fs-6 mt-2 ms-1 text-center'>Lo mas visto</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><a href='#'>Como conseguir trabajo rapido?</a></li>
                    <li class="list-group-item"><a href='#'>Mensajes motivacionales</a></li>
                    <li class="list-group-item"><a href='#'>Por esta razon no te contratan</a></li>
                    <li class="list-group-item"><a href='#'>Arma tu curriculum con estas tecnicas jamas reveladas</a></li>
                    <li class="list-group-item"><a href='#'>El momento indicado para renunciar</a></li>
                </ul>
               
            </div>
        </div>
    )
}

export default Sidebar