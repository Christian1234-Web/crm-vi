import React from 'react'

const Component = ({className, type, children, ...rest}) => {

    let extraClasses = "";

    if(type !== undefined) extraClasses += ` badge-${type}`

    return (
        <span className={`badge ${extraClasses} ${className}`} {...rest}>
            {children}
        </span>
    )
}

export default Component
