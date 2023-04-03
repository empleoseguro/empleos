import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = ({ mostViewed }) => {
    return (
        <div className='sidebar w-auto container p-0 h-50 rounded' style={{maxWidth:420}}>
            <div className='bg-light px-1'>
                <div className='fs-6 mt-2 ms-1 text-center'>TABLA DE CONTENIDO</div>
                <ul className="list-group list-group-flush">

                    {
                        mostViewed?.slice(0, 7).map((item, key) => (
                            <li className="list-group-item" key={key}>
                                <Link className='text-list  text-secondary' to={`/post/${item?.id}`}>
                                    {item?.attributes['title']}
                                </Link> 
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
