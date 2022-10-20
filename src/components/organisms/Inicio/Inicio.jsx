import React, { useEffect, useState } from 'react'
import { useGetPosts, useUser } from '../../../hooks/useGetPosts'
import { fetchAllPosts } from '../../../utils/actions'
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
                pages = [5, 9]
                break;
            case 3:
                pages = [10, 14]
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
                pages = [3, 5]
                break;
            case 3:
                pages = [6, 8]
                break;
            default:
                pages = [0, 2]
                break;
        }
        setStatusNoti({
            init: pages[0],
            final: pages[1]
        })
    }

    console.log(status)

    return (
        <BaseTemplate mostViewed={data}>
            <div className='d-flex flex-column  w-100 h-50'>
                <Portada />
                <div className='row mt-1 gx-2 row-cols-1'>

                    <div className='col-lg-8 order-md-2  recomendaciones'>
                        <div className=' fs-6 fw-bold text-center w-100 mb-1'>RECOMENDACIONES</div>
                        {
                            filter(data, 'recomendaciones').slice(status?.init, status?.final).map((item, key) => (
                                <div key={key}>
                                    <CardRecomendaciones item={item} />
                                </div>
                            ))
                        }

                    </div>

                    <div className='col-lg-4 order-md-1 noticias'>
                        <div className=' fs-6 fw-bold text-center w-100 mb-1'>NOTICIAS</div>
                        {
                            filter(data, 'noticias').slice(statusNoti?.init, statusNoti?.final).map((item, key) => (
                                <div key={key}>
                                    <CardNoticias item={item} />
                                </div>
                            ))
                        }
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
            </div>
        </BaseTemplate >
    )
}

const filter = (data, category) => {
    const filterList = data?.filter((item) => item['attributes']['category'].includes(category));

    return filterList
}
