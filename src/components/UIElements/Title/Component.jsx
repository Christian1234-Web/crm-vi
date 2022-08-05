import React from 'react'

const Component = ({className, level, children, ...rest}) => {

    let Ele = 'h' + level;

    return (
        <Ele className={className} {...rest}>
            {children}
        </Ele>
    )
}

export default Component
