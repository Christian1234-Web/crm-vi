import React from 'react'

const Label = ({className, children, ...rest}) => {
    return (
        <span className={className} {...rest}>
            {children}
        </span>
    )
}

export default Label
