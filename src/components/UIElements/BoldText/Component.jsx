import React from 'react'

const Component = ({children, ...rest}) => {
    return (
        <strong {...rest}>{children}</strong>
    )
}

export default Component
