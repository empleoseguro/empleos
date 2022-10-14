import React from 'react'

const TitleCard = ({ title, className }) => {
    return (
        <div className={`${className} fs-6 fw-bold`}
            dangerouslySetInnerHTML={{
                __html: title
            }}>
        </div>
    )
}

export default TitleCard
