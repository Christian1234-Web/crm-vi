import React from 'react'

const TimeLinePoint = ({className, type, children, style, ...props}) => {
    return (
        <div className={`timeline-point ${type} ${className}`} style={style} {...props}>
            {children}
        </div>
    )
}

export default TimeLinePoint
