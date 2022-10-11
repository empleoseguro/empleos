import React, { useEffect, useState } from 'react'
import { useGetPosts, useUser } from '../../../hooks/useGetPosts'
import { fetchAllPosts } from '../../../utils/actions'
import CardNoticias from '../../molecules/CardNoticias'
import CardRecomendaciones from '../../molecules/CardRecomendaciones'
import Portada from '../../molecules/Portada/Portada'
import BaseTemplate from '../../templates/BaseTemplate'
import './inicio.css'

export const Inicio = ({data}) => {

    


    return (
        <BaseTemplate mostViewed={data}>
            <div className='d-flex flex-column  w-100 h-50'>
                <Portada />
               
                <div className='row mt-1 gx-2 row-cols-1'>

                    
                <div className='col-md-8 order-md-2  recomendaciones'>
                        <div className=' fs-6 fw-bold text-center w-100 mb-1'>RECOMENDACIONES</div>
                        {
                            filter(data, 'recomendaciones').map((item, key) => (
                                <div key={key}>
                                    <CardRecomendaciones item={item} />
                                </div>
                            ))
                        }
                    </div>

                <div className='col-md-4 order-md-1 noticias'>
                        <div className=' fs-6 fw-bold text-center w-100 mb-1'>NOTICIAS</div>
                        {
                            filter(data, 'noticias').map((item, key) => (
                                <div key={key}>
                                    <CardNoticias item={item} />
                                </div>
                            ))
                        }
                    </div>



                
                  
                </div>
            </div>
        </BaseTemplate >
    )
}

const filter = (data, category) => {
    const filterList = data?.filter((item) => item['attributes']['category'].includes(category));
    
    return filterList
}
