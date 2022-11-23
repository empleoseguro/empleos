import React from 'react'
import Sidebar from '../../molecules/Sidebar'


const BaseTemplate = ({ children, mostViewed }) => {
    return (
        <div className='container p-0 d-md-flex'>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5223902182849072"
                crossorigin="anonymous"></script>
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-5223902182849072"
                data-ad-slot="3056942636"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
            <div className='w-100'>{children}</div>
            <div className='mb-2 me-2 bg-dark'></div>
            <Sidebar mostViewed={mostViewed} />
        </div>
    )
}

export default BaseTemplate
