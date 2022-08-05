import React from 'react'

const Component = ({className, children, type, ...rest}) => {

    let extraClasses = '';

    if(type !== undefined) extraClasses += `progress-bar progress-bar-${type}`;

    return (
        <div className={`${extraClasses} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Component
