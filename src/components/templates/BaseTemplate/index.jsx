import React from 'react'
import Sidebar from '../../molecules/Sidebar'


const BaseTemplate = ({ children, mostViewed }) => {
    return (
        <>
            <div className='p-0 mt-5'>
                <div className='p-0 m-0'>{children}</div>
            </div>
        </>
    )
}

export default BaseTemplate
