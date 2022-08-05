import React from 'react'

const Component = ({children, ...rest}) => {
    return (
        <mark {...rest}>{children}</mark>
    )
}

export default Component
