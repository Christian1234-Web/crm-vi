import React from 'react'

const Component = ({children, ...rest}) => {
    return (
        <small {...rest}>{children}</small>
    )
}

export default Component
