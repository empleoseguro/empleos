import React from 'react'

const AnuncioText = () => {
    return (
        <div className="card mb-3">
            <div className="column g-0">
                <div>
                    <img src="https://via.placeholder.com/400x300" className="img-fluid rounded-start" alt="Imagen del anuncio" />
                </div>
                <div className="">
                    <div className="card-body">
                        <h5 className="card-title">Título del anuncio</h5>
                        <p className="card-text">Descripción breve del anuncio.</p>
                        <p className="card-text"><small className="text-muted">Fecha de publicación: 1 de abril de 2023</small></p>
                        <button className="btn btn-primary">Ver más detalles</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnuncioText
