import React from 'react'

const MiniTips = () => {
    return (
        <div className='d-flex flex-column fs-6 ' style={{ maxWidth: '21rem'}}>
            <div className='text-light text-center border border-secondary mb-2 fw-bold rounded' style={{ backgroundColor: '#8e7ff7' }}>MINI TIPS</div>
            <div className="card text-white border-secondary mb-1" style={{ maxWidth: '21rem', maxHeight: '14rem', backgroundColor: '#8e7ff7' }}>

                <div className="card-body">
                    <p className="card-text">Mantén una actitud positiva y enfócate en tus objetivos para tener éxito en la búsqueda de trabajo o en el trabajo mismo.</p>
                </div>
                <div className="card-footer bg-transparent border-secondary">José Castro</div>
            </div>
            <div className="card text-white border-secondary mb-1" style={{ maxWidth: '21rem', maxHeight: '14rem', backgroundColor: '#8e7ff7' }}>

                <div className="card-body">
                    <p className="card-text">Investiga sobre la empresa o trabajo y prepárate para destacar en el puesto, incluyendo para entrevistas o reuniones importantes.</p>
                </div>
                <div className="card-footer bg-transparent border-secondary">Andry Martínez</div>
            </div>
            <div className="card text-white border-secondary mb-1" style={{ maxWidth: '21em', maxHeight: '14rem', backgroundColor: '#8e7ff7' }}>

                <div className="card-body">
                    <p className="card-text">Mantén una comunicación efectiva con colegas, empleadores y posibles empleadores para resolver problemas y establecer relaciones sólidas y exitosas.</p>
                </div>
                <div className="card-footer bg-transparent border-secondary">Anthony Valentin</div>
            </div>
        </div>
    )
}

export default MiniTips
