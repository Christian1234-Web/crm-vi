import React from 'react'

const CardFooter = ({children, className, style, ...props}) => {
    return (
        <div className={`card-footer clearfix ${className}`} style={style} {...props}>
            {children}
        </div>
    )
}

export default CardFooter
