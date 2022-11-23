import React from 'react'
import Sidebar from '../../molecules/Sidebar'


const BaseTemplate = ({ children, mostViewed }) => {
    return (
        <>
        <div className='container p-0 d-md-flex'>
         
            <div className='w-100'>{children}</div>
            <div className='mb-2 me-2 bg-dark'></div>
            <Sidebar mostViewed={mostViewed} />
        </div>
        </>
    )
}

export default BaseTemplate
