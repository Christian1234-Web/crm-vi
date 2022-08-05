import React from 'react'

const Component = ({className, type, children, ...rest}) => {

    let extraClasses = "";

    if(type !== undefined) extraClasses += ` alert-${type}`

    return (
        <div className={`alert ${extraClasses} ${className}`} {...rest} role="alert">
            {children}
        </div>
    )
}

export default Component
