import React from 'react'

const Component = ({className, type, children, ...rest}) => {

    let extraClasses = '';

    if(type !== undefined) extraClasses += `btn btn-${type}`;

    return (
        <label className={`${extraClasses} ${className}`} {...rest}>
            {children}
        </label>
    )
}

export default Component
