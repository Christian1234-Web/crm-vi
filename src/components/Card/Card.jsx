import React from 'react'

const Card = ({className="", children, type='default', title='', headerOption='', ...rest}) => {
    return (
        <div className={`card ${className} card-${type}`} {...rest}>
            {title !== '' ? 
                <div className={`card-header ${headerOption}`}>
                    <div className="card-title">{title}</div>
                    {children}
                </div>
            :
                children
            }
        </div>
    )
}

export default Card
