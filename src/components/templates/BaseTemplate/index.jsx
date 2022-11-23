import React from 'react'
import Sidebar from '../../molecules/Sidebar'


const BaseTemplate = ({ children, mostViewed }) => {
    return (
        <div className='container p-0 d-md-flex'>
            
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-5223902182849072"
     data-ad-slot="2448731688"></ins>

            <div className='w-100'>{children}</div>
            <div className='mb-2 me-2 bg-dark'></div>
            <Sidebar mostViewed={mostViewed} />
        </div>
    )
}

export default BaseTemplate
