import React, { useState } from 'react'
import { scrollToTop } from '../../../utils/functions'
import AnuncioText from '../../atoms/AnuncioTest/AnuncioText'
import CardNoticias from '../../molecules/CardNoticias'
import CardRecomendaciones from '../../molecules/CardRecomendaciones'
import MiniTips from '../../molecules/MiniTips'
import Portada from '../../molecules/Portada/Portada'
import './inicio.css'

export const Inicio = ({ data }) => {

    const [status, setStatus] = useState({ init: 0, final: 4 })
    const [statusNoti, setStatusNoti] = useState({ init: 0, final: 2 })
    const [active, setActive] = useState(1)

    scrollToTop()

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
                break;
            default:
                pages = [0, 4]
                break;
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
            <div className='h-100 mt-2 m-0 p-0 d-flex flex-column flex-lg-row  justify-content-around'>
                <div className='col-12 col-lg-3 m-0 p-0  px-lg-1 d-none d-md-flex align-self-center align-self-lg-start justify-content-center text-center'>
                    <AnuncioText />
                </div>
                <div className='col-12 col-lg-6 m-0 p-0 px-lg-2'>
                    {
                        filter(data, 'recomendaciones').slice(status?.init, status?.final).map((item, key) => (
                            <div key={key}>
                                <CardRecomendaciones item={item} />
                            </div>
                        ))
                    }
                </div>
                <div className='d-flex flex-column m-0 p-0  px-lg-1'>
                    <div className='col-lg-12 mb-3  order-sm-1 d-flex text-center align-self-center'>
                        <AnuncioText />
                    </div>
                    <div className='d-flex flex-column m-0 p-0'>
                        <div className='fs-6 fw-bold text-center bg-light p-1'>NOTICIAS</div>
                        {
                            filter(data, 'noticias').slice(statusNoti?.init, statusNoti?.final).map((item, key) => (
                                <div key={key}>
                                    <CardNoticias item={item} />
                                </div>
                            ))
                        }
                    </div>
                    <div className='d-flex text-center align-self-center'>
                        <MiniTips />
                    </div>

                </div>
            </div>

            <nav className='d-flex justify-content-center pe-auto mt-1 user-select-none'>
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
