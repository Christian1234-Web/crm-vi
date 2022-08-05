import React from 'react'

const Component = ({className, size, type, children, ...rest}) => {
    let Ele = 'p'
    let extraClasses = "";

    if(size !== undefined) extraClasses += ` ${size}`
    if(type !== undefined) extraClasses += ` ${type}`

    return (
        <Ele className={className + extraClasses} {...rest}>
            {children}
        </Ele>
    )
}

export default Component
