import React from 'react'
import Sidebar from '../../molecules/Sidebar'


const BaseTemplate = ({ children, mostViewed }) => {
    return (
        <div className='mt-5'>
            <div className='mt-5'>{children}</div>
        </div>
    )
}

export default BaseTemplate
