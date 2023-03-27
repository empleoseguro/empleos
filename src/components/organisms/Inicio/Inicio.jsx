import React, { useState } from 'react'
import CardNoticias from '../../molecules/CardNoticias'
import CardRecomendaciones from '../../molecules/CardRecomendaciones'
import Portada from '../../molecules/Portada/Portada'
import BaseTemplate from '../../templates/BaseTemplate'
import './inicio.css'

export const Inicio = ({ data }) => {

    const [status, setStatus] = useState({ init: 0, final: 4 })
    const [statusNoti, setStatusNoti] = useState({ init: 0, final: 2 })
    const [active, setActive] = useState(1)

    const page = (type) => {
        setActive(type)
        let pages
        switch (type) {
            case 1:
                pages = [0, 4]
                break;
            case 2:
                pages = [4, 8]
                break;
            case 3:
                pages = [8, 12]
                break;
            case 4:
                pages = [12, 16]
            default:
                pages = [0, 4]
        }
        setStatus({
            init: pages[0],
            final: pages[1]
        })
    }

    const pageNoti = (type) => {
        let pages
        switch (type) {
            case 1:
                pages = [0, 2]
                break;
            case 2:
                pages = [2, 4]
                break;
            case 3:
                pages = [4, 6]
                break;
            case 4:
                pages = [6, 8]
                break;
            default:
                pages = [0, 2]
        }
        setStatusNoti({
            init: pages[0],
            final: pages[1]
        })
    }

    return (
        <>
            <Portada />
            <div className='row  mt-2 m-0 p-0 d-flex justify-content-center'>
                <div className='col-2 d-none d-md-flex border border text-center border border-secondary '></div>
                <div className='col-lg-6 m-0 p-0 mx-sm-3'>
                    {
                        filter(data, 'recomendaciones').slice(status?.init, status?.final).map((item, key) => (
                            <div key={key}>
                                <CardRecomendaciones item={item} />
                            </div>
                        ))
                    }
                </div>
                <div className='col-lg-3 m-0 p-0 row'>
                    <div className='col-12 mb-3  order-sm-1 d-flex text-center border border-secondary '>ADS</div>
                    <div className='col m-0 p-0'>
                        <div className='fs-6 fw-bold text-center bg-light p-1'>NOTICIAS</div>
                        {
                            filter(data, 'noticias').slice(statusNoti?.init, statusNoti?.final).map((item, key) => (
                                <div key={key}>
                                    <CardNoticias item={item} />
                                </div>
                            ))
                        }
                    </div>

                </div>



            </div>

            <nav className='d-flex justify-content-center pe-auto user-select-none'>
                <ul className="pagination pagination-sm">

                    <li className={`page-item ${active === 1 && 'active'}`}
                        onClick={() => {
                            page(1)
                            pageNoti(1)
                        }} aria-current="page">
                        <span className="page-link">1</span>
                    </li>
                    <li className={`page-item ${active === 2 && 'active'}`}
                        onClick={() => {
                            page(2)
                            pageNoti(2)
                        }}>
                        <span className="page-link">2</span>
                    </li>
                    <li className={`page-item ${active === 3 && 'active'}`}
                        onClick={() => {
                            page(3)
                            pageNoti(3)
                        }}>
                        <span className="page-link">3</span>
                    </li>


                </ul>
            </nav>


        </>
    )
}

const filter = (data, category) => {
    const filterList = data?.filter((item) => item['attributes']['category'].includes(category));

    return filterList
}
