import React from 'react'

const EventDate = ({className, title, date, style, ...props}) => {
    return (
        <div className={`event-date ${className}`} style={style} {...props}>
            { title !== undefined 
                ? <h6 className="font-montserrat all-caps hint-text m-t-0">{title}</h6> : null 
            }
            <small className="fs-12 hint-text">{date}</small>
        </div>
    )
}

export default EventDate
