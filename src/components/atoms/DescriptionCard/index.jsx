import React from 'react'

const DescriptionCard = ({ description, className }) => {
    return (
        <div className={`${className} fs-6 fw-bold`}
            dangerouslySetInnerHTML={{
                __html: description
            }}>
        </div>
    )
}

export default DescriptionCard
