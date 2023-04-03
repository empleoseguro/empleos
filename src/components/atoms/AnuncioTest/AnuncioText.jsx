import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AnuncioText = () => {
    return (
        <div className="card mb-3" style={{width:325, height:'100%'}}>
            <div className="column g-0">
                <div>
                    <LazyLoadImage
                        src="https://via.placeholder.com/400x300"
                        alt="Imagen del anuncio"
                        effect='blur'
                        threshold={0.5}
                        width="100%"
                        height="auto"
                        loading='lazy'
                        className="img-fluid rounded-start"
                    />
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


// <LazyLoadImage
//         src="https://example.com/image.jpg"
//         alt="Example Image"
//         effect="blur"
//         threshold={500}
//         width="100%"
//         height="auto"
//         srcSet="
//           https://example.com/image-320.jpg 320w,
//           https://example.com/image-640.jpg 640w,
//           https://example.com/image-1280.jpg 1280w
//         "
//         sizes="(max-width: 320px) 280px,
//                (max-width: 640px) 600px,
//                1200px"
//         loading="lazy"
//       />
