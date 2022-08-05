import React from 'react'

const Component = ({className, children, ...rest}) => {

    return (
        <i className={`pg-icon ${className}`} {...rest}>
            {children}
        </i>
    )
}

export default Component
