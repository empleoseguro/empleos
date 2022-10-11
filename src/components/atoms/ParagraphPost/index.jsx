import React from 'react'
import './paragraphpost.css'

const ParagraphPost = ({ text }) => {
    return (
        <div className="paragraph container container-fluid-sm"
            dangerouslySetInnerHTML={{
                __html: text 
            }}>


        </div>
    )
}

export default ParagraphPost
