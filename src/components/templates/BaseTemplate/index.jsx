import React from 'react'
import Sidebar from '../../molecules/Sidebar'


const BaseTemplate = ({ children }) => {
    return (
        <div className='container d-md-flex'>
            <div className='d-flex flex-column  w-100 h-50 me-2'>{children}</div>
            <Sidebar/>
        </div>
    )
}

export default BaseTemplate
