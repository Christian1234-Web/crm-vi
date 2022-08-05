import React from 'react'

const Card = ({type, className, style, children, id}) => {
    return (
        <div className={`card ${type}-card ${className}`} 
            style={style}
            data-social="item"
            id={id}
        >
            {children}
        </div>
    )
}

export default Card
