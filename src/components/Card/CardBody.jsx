import React from 'react'

const CardBody = ({className, children, ...rest}) => {
    return (
        <div className={`card-body ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default CardBody
