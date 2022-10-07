import React from 'react'
import Sidebar from '../../molecules/Sidebar'


const BaseTemplate = ({ children }) => {
    return (
        <div className='container d-md-flex'>
            <div className='mx-2 w-100'>{children}</div>
            <Sidebar/>
        </div>
    )
}

export default BaseTemplate
