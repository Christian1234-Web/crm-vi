import React from 'react'

const Component = ({className="", children, ...rest}) => {
    return (
        <div className={`container-fluid container-fixed-lg ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Component
