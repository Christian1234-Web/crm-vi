import React from 'react'

const Component = ({className, children, ...rest}) => {
    return (
        <ol className={`breadcrumb ${className}`} {...rest}>
            {children}
        </ol>
    )
}

export default Component
