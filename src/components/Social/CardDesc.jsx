import React from 'react'

const CardDesc = ({className, children}) => {
    return (
        <div className={`card-description ${className}`}>
            {children}
        </div>
    )
}

export default CardDesc
