import React from 'react'

const Sidebar = ({ mostViewed }) => {
    return (
        <div className='w-auto container p-0 h-50 rounded'>
            <div className='text-center bg-light' style={{ height: 400 }}>anuncio boleta</div>
            <div className='bg-light px-1'>
                <div className='fs-6 mt-2 ms-1 text-center'>Lo mas visto</div>
                <ul className="list-group list-group-flush">

                    {
                        mostViewed?.slice(0, 3).map((item, key) => (
                            <li className="list-group-item" key={key}>
                                <a href={item?.id}>
                                    {item?.attributes['title']}
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Sidebar
