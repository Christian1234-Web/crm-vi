import React from 'react'

import Small from '../SmallText';

const Component = ({className, author, children, ...rest}) => {

    return (
        <blockquote className={className} {...rest}>
            {children}
            <Small>{author}</Small>
        </blockquote>
    )
}

export default Component
