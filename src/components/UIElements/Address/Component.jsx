import React from 'react'

const Component = ({className, children, ...rest}) => {

    return (
        <address className={className} {...rest}>
            {children}
        </address>
    )
}

export default Component
