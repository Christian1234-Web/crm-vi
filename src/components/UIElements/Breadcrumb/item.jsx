import React from 'react'

const item = ({className, children, ...rest}) => {
    return (
        <li className={className} {...rest}>
            {children}
        </li>
    )
}

export default item
